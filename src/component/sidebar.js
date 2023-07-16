import CompletedToDoList from "../completedToDoList";

function Sidebar(props) {
  return(
  <div className='sidebar'>
        <h2>Current Projects: </h2>
        <ul>
          {props.todos.length === 0 && 'No Todos'}
          {props.todos.map(todo => {
            return <li key={todo.id}>
              {todo.title}
            </li>
          })}
        </ul>
        {props.completedTodos.length === 0 ? null : <CompletedToDoList todos={props.completedTodos}></CompletedToDoList>}
      </div>
  )
}

export default Sidebar;