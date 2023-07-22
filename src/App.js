import './App.css';
import { useState, useRef } from 'react';
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
  const completedCount = useRef(0)
  const [layout, setLayout] = useState({style:'list', selected:null});

  function deleteTodo(todo) {
    console.log(`todo completed check: ${todo.completed}`)
    if (todo.completed){
      completedCount.current = completedCount.current - 1;
    }
    setTodos((current) => {
      return current.filter(item => item.id !== todo.id)
    })
  }

  return (
    <div className="App">
      <Header title={'ToDo List'}></Header>
      <Sidebar todos={todos} completedCount={completedCount} setLayout={setLayout}></Sidebar>
      <MainContent 
        layout={layout}
        setLayout={setLayout}
        todos={todos} 
        setTodos={setTodos} 
        deleteTodo={deleteTodo}
        completedCount={completedCount}>
      </MainContent>
      <ModalForm  todos={todos} setTodos={setTodos} ></ModalForm>   
    </div>
  );
}

export default App;
