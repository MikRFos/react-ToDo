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

  function toggleItems(todoId, itemId, completed) {
    setTodos((currentTodos => {
      return currentTodos.map((todo) => {
        if (todoId === todo.id) {
          todo.todos.map((item) => {
            if (itemId === item.id) {
              item.completed = completed;
            }
            return item;
          })
        }
        if (todo.checkComplete){
          return {...todo, completed}
       }
        return todo;
      })
    }))
  }
  
  return (
    <div className="App">
      <Header title={'ToDo List'}></Header>
      <Sidebar todos={todos}></Sidebar>
      <MainContent toggle={toggleItems} todos={todos}></MainContent>
      <ModalForm  todos={todos} setTodos={setTodos} ></ModalForm>   
    </div>
  );
}

export default App;
