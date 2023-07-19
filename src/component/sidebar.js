import CompletedToDoList from "./completedToDoList";

function Sidebar({todos, completedTodos, setLayout}) {
  return(
  <div className='sidebar'>
        <h2>Current Projects: </h2>
        <ul>
          {todos.length === 0 && 'No Todos'}
          {todos.map(todo => {
            return <li key={todo.id} onClick={() => console.log(`${todo.title} Clicked`)}>
              {todo.title}
            </li>
          })}
        </ul>
        {completedTodos.length === 0 ? null : <CompletedToDoList todos={completedTodos} setLayout={setLayout}></CompletedToDoList>}
      </div>
  )
}

export default Sidebar;