import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Divider, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { deleteToDo, getToDo, postToDo } from "../api/api";
import { ToDoContext } from "./ToDoProvider";

export default function ToDoList() {
    const {tasks, setTasks, setMessage} = useContext(ToDoContext);

    function handleDelete(id: number) {
        deleteToDo(id);
        setTasks(tasks.filter(t => t.Id !== id));
        setMessage({
                success: true,
                header: 'Success',
                content: 'Task successsfully deleted'
            });
    }

    function toggleActive(id: number) {
        const task = getToDo(id);
        if (task) {
            task.Edited = new Date();
            task.Active = !task.Active;
            postToDo(task);
            setMessage({
                success: true,
                header: 'Success',
                content: 'Task successsfully edited'
            });
        }
    }

    return (
        <>
            <Header as='h2' textAlign='center' > List of tasks</Header>
            {tasks.length > 0 && tasks.map( task => (
                <Segment key={task.Id}>
                    <Header>{task.Content}</Header>
                    <Grid>
                        <Grid.Column floated='left' mobile={16} tablet={8} computer={8}>
                            <Button size='mini' type='button' onClick={() => toggleActive(task.Id)} color={task.Active ? 'orange' : 'teal'}>{task.Active ? 'Active' : 'Already done'}</Button>
                            {task.Created < task.Edited ?
                            <p>Edited: {task.Edited.toLocaleDateString()} at {task.Edited.toLocaleTimeString()}</p>
                            : <p>Created: {task.Created.toLocaleDateString()} at {task.Created.toLocaleTimeString()}</p>}
                        </Grid.Column>
                        <Grid.Column floated='right' mobile={16} tablet={7} computer={7}>
                            <div className='ui two buttons'>
                            <Button color='green' as={Link} to={`/edittodo/${task.Id}`}>Edit</Button>
                            <Button color='orange' onClick={()=>handleDelete(task.Id)}>Delete</Button>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Segment>
            ))}
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='edit outline' />
                    New Task
                </Header>
            </Divider>
            <Button as={NavLink} to='/newtodo' positive content='Create Task'/>
        </>
    )
}