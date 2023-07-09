import React from "react";
import Card from "./card";

function MainContent(props) {
    return (
      <div className='todo-card-area'>
        {props.todos.map(todo => {
          return <Card todo={todo}/> 
        })}
      </div>
    )
}

export default MainContent;