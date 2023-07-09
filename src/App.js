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
    [{text:'Todo Item 1', complete: false, id: crypto.randomUUID()}, 
      {text:'ToDo Item 2', complete:false, id: crypto.randomUUID()}, 
      {text:'ToDo Item 3', complete:false, id: crypto.randomUUID()}, 
      {text: 'ToDo Item 4', complete:false, id:crypto.randomUUID()}],
    'Default todo list of things i gotta do',
  )

  const [todos, setTodos] = useState([defaultToDo]);
  
  return (
    <div className="App">
      <Header title={'ToDo List'}></Header>
      <Sidebar todos={todos}></Sidebar>
      <MainContent todos={todos}></MainContent>
      <ModalForm todos={todos} setTodos={setTodos} ></ModalForm>   
    </div>
  );
}

export default App;
