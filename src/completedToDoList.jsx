export default function CompletedToDoList(props){

  function handleClick(todo) {
    props.setLayout((current) =>{
      return {style:'single', selected: todo}
    })
  }
  return (
    <>
      <h2>Completed Projects: </h2>
      <ul>
          {props.todos.map(todo => {
            return <li key={todo.id} onClick={(todo) => handleClick(todo)}>
          {todo.title}
          </li>
        })}
      </ul>
    </>
  )
}