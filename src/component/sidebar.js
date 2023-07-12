import React from "react";

function Sidebar(props) {
  return(
  <div className='sidebar'>
        <h2>Current Projects: </h2>
        <ul>
          {props.todos.map(todo => {
            return <li key={todo.id}>
              {todo.title}
            </li>
          })}
        </ul>
      </div>
  )
}

export default Sidebar;