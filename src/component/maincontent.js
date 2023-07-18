import React from "react";
import ListLayout from "./listLayout";
import SingleLayout from "./singleLayout";
function MainContent(props) {
  
    return (
      <>
      {props.layout.style === 'list' ?
        <ListLayout 
        setTodos={props.setTodos}
        todos={props.todos}  
        setCompletedTodos={props.setCompletedTodos} 
        removeFromCurrentToDos={props.removeFromCurrentToDos} />
      :
        <SingleLayout 
          layout={props.layout}
          setCompletedTodos={props.setCompletedTodos}
          setTodos={props.setTodos}
          removeFromCurrentToDos={props.removeFromCurrentToDos}/>
      }
    </>
    )
}

export default MainContent;

