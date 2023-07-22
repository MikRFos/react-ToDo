import CompletedToDoList from "./completedToDoList";

function Sidebar({todos, completedCount, setLayout}) {
  return(
  <div className='sidebar'>
        <h2>Current Projects: </h2>
        <ul>
          {todos.length === completedCount.current && 'No Todos'}
          {todos.map(todo => {
            if(!todo.completed){
              return <li key={todo.id} onClick={() => console.log(`${todo.title} Clicked`)}>
                {todo.title}
              </li>
            }
            return null;
          })}
        </ul>
        {completedCount.current === 0 ? null : <CompletedToDoList todos={todos} setLayout={setLayout}></CompletedToDoList>}
      </div>
  )
}

export default Sidebar;