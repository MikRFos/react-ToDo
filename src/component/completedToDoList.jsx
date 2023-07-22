export default function CompletedToDoList({todos, setLayout}){

  function handleClick(todo) {
    setLayout((current) =>{
      return {...current, style:'single', selected: todo}
    })
  }
  return (
    <>
      <h2>Completed Projects: </h2>
      <ul>
          {todos.map(todo => {
            if(todo.completed){
              return <li key={todo.id} onClick={() => handleClick(todo)}>
                      {todo.title}
                     </li>
            }
            return null;
        })}
      </ul>
    </>
  )
}