import React, { useContext } from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';
import { Container, Message } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { ToDoContext } from './components/ToDoProvider';

function App() {
const {message} = useContext(ToDoContext);

  return (
    <div className="App">
      <NavBar/>
        <Container text style={{marginTop: '3em'}}>
          <Switch>
            <Route path='/' exact component={ToDoList}/>
            <Route path={['/newtodo','/edittodo/:id']} 
              component={ToDoForm}/>
          </Switch>
          {message && 
            <Message
                    error={!message.success}
                    success={message.success}
                    header={message.header}
                    content={message.content}
                />
          }
        </Container>
    </div>
  );
}

export default App;
