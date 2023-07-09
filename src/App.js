import './App.css';
import { useState } from 'react';
import ToDoList from './component/to-dolist';
import Sidebar from './component/sidebar';
import MainContent from './component/maincontent';
import ModalForm from './component/ModalForm';
import Header from './component/header';

function App() {

  const defaultToDo = new ToDoList(
    'Test To-Do',
    [{text:'Work on this', complete: false, id: crypto.randomUUID()}, 
      {text:'Get interview', complete:false, id: crypto.randomUUID()}, 
      {text:'Study', complete:false, id: crypto.randomUUID()}, 
      {text: 'Get new job!', complete:false, id:crypto.randomUUID()}],
    'Default todo list of things i gotta do',
  )

  const [todos, setTodos] = useState([defaultToDo]);

  function handleTodoToggle(id, complete) {
    setTodos((currentToDos) => {
      return currentToDos.map(todo => {
        if (todo.id === id) {
          return [...todo, complete];
        }

        return todo;
      })
    })
  }
  
  return (
    <div className="App">
      <Header title={'ToDo List'}></Header>
      <Sidebar todos={todos}></Sidebar>
      <MainContent todos={todos} toggle={handleTodoToggle}></MainContent>
      <ModalForm todos={todos} setTodos={setTodos} ></ModalForm>   
    </div>
  );
}

export default App;
