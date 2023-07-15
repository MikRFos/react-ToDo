function Card(props) {
  return (
    <div className='card'>
    <p>{props.todo.title}</p>
     <ul>
      {props.todo.todos.map( item => {
        return (
          <li key={item.id}>
            <label>
              <input type='checkbox' checked={item.completed} onChange={e => props.toggle(props.todo.id, item.id, e.target.checked)}></input>
              {item.text}
            </label>
          </li>
        )})}
      </ul>     
    <p>{props.todo.description}</p>
  </div>
  )
}

export default Card;