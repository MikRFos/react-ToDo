import React from "react";
import ListLayout from "./listLayout";
import SingleLayout from "./singleLayout";
function MainContent({todos, layout, setTodos, setCompletedTodos, removeFromCurrentToDos}) {

  function toggleItems(todoId, itemId, completed) {
    setTodos((currentTodos) => {
      const newArray = currentTodos.map((todo) => {
        if (todoId === todo.id) {
          const newTodos = getClickedTodo(todo, itemId, completed);
          const newToDoItem = {...todo, todos: newTodos};
          if (newToDoItem.checkComplete()){
            addCompletedToDo(newToDoItem);
          } else {
            removeCompletedToDo(newToDoItem);
          }
          return newToDoItem;
        }
        return todo;
      })
      return newArray;
    })
  }

  function addCompletedToDo(todo){ 
    setCompletedTodos((current) => {
      //FIGURE OUT WHY THIS IS BEING CALLED MULTIPLE TIMES
      //This is a hack to get it working by ensuring only 1 ID is in the array.
      for(let i=0; i < current.length; i+= 1){
        console.log(current[i]);
        if (current[i].id === todo.id){
          return [...current];
        }
      }
      removeFromCurrentToDos(todo);
      return [...current, todo];
    })
  }
  

  function removeCompletedToDo(todo){ 
    setCompletedTodos((current) => {
      return current.filter(item => item.id !== todo.id);
    })
  }

  function getClickedTodo(todo, itemId, completed){
    return todo.todos.map((item) => {
      if (itemId === item.id) {
        item.completed = completed;
      }
      return item;
    })
  }
  
    return (
      <>
      {layout.style === 'list' ?
        <ListLayout 
        toggleItems={toggleItems}
        todos={todos}
        />
      :
        <SingleLayout 
          layout={layout}
          toggleItems={toggleItems}
        />
      }
    </>
    )
}

export default MainContent;

