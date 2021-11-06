import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form, Header } from "semantic-ui-react";
import { getToDo, postToDo } from "../api/api";
import { ToDoElement } from "../models/ToDoElement";
import { ToDoContext } from "./ToDoProvider";

export default function ToDoForm() {
    const {tasks, message, setMessage} = useContext(ToDoContext);
    const history = useHistory();
    const {id} = useParams<{id: string}>();
    const [task, setTask] = useState<ToDoElement>({
        Id: 0,
        Content: '',
        Active: true,
        Created: new Date(),
        Edited: new Date()
    })

    useEffect(() => {
        if(id) {
            const todo = getToDo(Number(id));
            if (todo) {
                setTask(todo);
            }
        };
    }, [id])

    useEffect(() => {
        if (message !== null) {
            setMessage(null);
        }
    }, [])

    function handleSubmit() {
        if (validateContext()){
            if (task.Id !== 0) {
                task.Edited = new Date();
            }
            postToDo(task);
            setMessage({
                success: true,
                header: 'Success',
                content: 'Task successsfully added'
            });
            history.push('/');
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value}=event.target;
        setTask({...task, [name]: value});
        if (message !== null) {
            setMessage(null);
        }
    }

    function toggleActive() {
        setTask({...task, Active: !task.Active});
        if (message !== null) {
            setMessage(null);
        }
    }

    function closeForm() {
        history.push('/');
        if (message !== null) {
            setMessage(null);
        }
    }

    function validateContext() {
        if (task.Content.trim() === '') {
            setMessage({
                success: false,
                header: 'Empty Task',
                content: 'Task is empty, please fill task description'
            });
            return false;
        } else if (tasks.some(t => t.Content === task.Content)) {
            setMessage({
                success: false,
                header: 'Task duplication',
                content: 'Such task already exist, please submit another task'
            });
            return false;
        };
        return true;
    }

    return (
        <>
        <Header as='h2' textAlign='center'>{id?'Edit':'New'} task</Header>
            <Form onSubmit={handleSubmit} error>
                <Form.Input required label='Task description' placeholder='Write the task here' value={task.Content || ''} name='Content' onChange={handleInputChange}/>
                <Form.Checkbox label='Active' checked={task.Active || false} name='Active' onChange={toggleActive}/>
                <Button positive type='submit'>Submit</Button>
                <Button onClick={closeForm} type='button'>Cancel</Button>
            </Form>
        </>
    )
}