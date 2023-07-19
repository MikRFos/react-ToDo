import Card from "./card"

export default function ListLayout({todos, toggleItems}) {
  return(
    <div className='todo-card-area'>
      {todos.map(todo => {
        return <Card 
          key={todo.id} 
          todo={todo} 
          toggleItems={toggleItems}/> 
        })}
      </div>
  )
}