export default function CompletedToDoList(props){
  return (
    <>
      <h2>Completed Projects: </h2>
      <ul>
          {props.todos.map(todo => {
            return <li key={todo.id}>
          {todo.title}
          </li>
        })}
      </ul>
    </>
  )
}