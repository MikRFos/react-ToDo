import React from "react";
import { useState } from "react";
import ToDoList from "./to-dolist";

function ModalForm(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [itemList, setItemList] = useState('');


  function createTodo(title, listItems, description, completed) {
    const newTodo = new ToDoList(title, listItems, description, completed);

    props.setTodos((currentToDos) => {
      return [...currentToDos, newTodo];
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setOpen(false)
    let formattedList = itemList.split(',').map(item => {
      return {text: item.trim(), completed: false, id: crypto.randomUUID()}
      });
    
    createTodo(title, formattedList, description, false)
    setTitle('');
    setItemList('');
    setDescription('');
  }

  return (
    <>
    <button className="create-todo-button" onClick={() => setOpen(true)}>Create ToDo List</button>
    <dialog open={open}>
        <form>
          <div className='form-row'>
            <label htmlFor='title-input'>Title:</label>
            <input id='title-input' value={title} onChange={e => setTitle(e.target.value)}></input>
          </div>
          <div className='form-row'>
            <label htmlFor='raw-todos'>ToDos</label>
            <textarea placeholder='Enter comma separated list' id='raw-todos' value={itemList} onChange={e => setItemList(e.target.value)}></textarea>
          </div>
          <div className='form-row'>
            <label htmlFor='description-input'>Description</label>
            <input type='text' id='description-input' value={description} onChange={e => setDescription(e.target.value)}></input>
          </div>
          <button 
            onClick={(e) => handleFormSubmit(e)}>
            Submit</button>
        </form>
    </dialog>
    </>
  )
}

export default ModalForm;