import './App.css';
import { useState } from 'react';
import ToDoList from './component/to-dolist';
import Sidebar from './component/sidebar';
import MainContent from './component/maincontent';
import ModalForm from './component/ModalForm';
import Header from './component/header';

function App() {

  const defaultToDo = ToDoList(
    'Test To-Do',
    [{text:'Todo Item 1', completed: false, id: crypto.randomUUID()}, 
      {text:'ToDo Item 2', completed:false, id: crypto.randomUUID()}, 
      {text:'ToDo Item 3', completed:false, id: crypto.randomUUID()}, 
      {text: 'ToDo Item 4', completed:false, id:crypto.randomUUID()}],
    'Default todo list of things i gotta do',
  )

  const [todos, setTodos] = useState([defaultToDo]);
  const [completedTodos, setCompletedTodos] = useState([]);

  function removeFromCurrentToDos(todo) {
    setTodos((current) => {
      return current.filter(item => item.id !== todo.id)
    })
  }
  
  return (
    <div className="App">
      <Header title={'ToDo List'}></Header>
      <Sidebar todos={todos} completedTodos={completedTodos}></Sidebar>
      <MainContent 
        todos={todos} 
        setTodos={setTodos} 
        setCompletedTodos={setCompletedTodos} 
        removeFromCurrentToDos={removeFromCurrentToDos}>
      </MainContent>
      <ModalForm  todos={todos} setTodos={setTodos} ></ModalForm>   
    </div>
  );
}

export default App;
