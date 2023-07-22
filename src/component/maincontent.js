import React from "react";
import ListLayout from "./listLayout";
import SingleLayout from "./singleLayout";
function MainContent({todos, layout, setTodos, completedCount, deleteTodo, setLayout}) {

  function toggleItems(todoId, itemId, checked) {
    setTodos((currentTodos) => {
      const newArray = currentTodos.map((todo) => {
        if (todoId === todo.id) {
          const wasCompleted = todo.completed;
          const newTodos = getClickedTodo(todo, itemId, checked);
          let newToDoItem = {...todo, todos: newTodos};
          if (newToDoItem.checkComplete()){
            newToDoItem = {...newToDoItem, completed:true};
            completedCount.current = completedCount.current + 1;
          } else {
            if (wasCompleted) {
              newToDoItem = {...newToDoItem, completed:false};
              completedCount.current = completedCount.current - 1;
            }
          }
          return newToDoItem;
        }
        return todo;
      })
      return newArray;
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
        deleteTodo={deleteTodo}
        layout={layout}
        />
      :
        <SingleLayout 
          layout={layout}
          toggleItems={toggleItems}
          deleteTodo={deleteTodo}
          setLayout={setLayout}
        />
      }
    </>
    )
}

export default MainContent;

