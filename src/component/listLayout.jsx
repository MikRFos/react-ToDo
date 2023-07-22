import Card from "./card"

export default function ListLayout({todos, toggleItems, deleteTodo, layout}) {
  return(
    <div className='todo-card-area'>
      {todos.map(todo => {
        if(!todo.completed){
          return <Card 
            key={todo.id} 
            todo={todo} 
            toggleItems={toggleItems}
            deleteTodo={deleteTodo}
            layout={layout}/> 
        }
        return null;
      })
      }
      </div>
  )
}