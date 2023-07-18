import Card from "./card"

export default function ListLayout(props) {
  return(
    <div className='todo-card-area'>
      {props.todos.map(todo => {
        return <Card 
          key={todo.id} 
          setCompletedTodos={props.setCompletedTodos} 
          setTodos={props.setTodos} 
          todo={todo} 
          removeFromCurrentToDos={props.removeFromCurrentToDos}/> 
        })}
      </div>
  )
}