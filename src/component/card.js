function Card({todo, toggleItems}) {

  

  return (
    <div className='card'>
    <p>{todo.title}</p>
     <ul>
      {todo.todos.map( item => {
        return (
          <li key={item.id}>
            <label>
              <input type='checkbox' checked={item.completed} onChange={e => toggleItems(todo.id, item.id, e.target.checked)}></input>
              {item.text}
            </label>
          </li>
        )})}
      </ul>     
    <p>{todo.description}</p>
  </div>
  )
}

export default Card;