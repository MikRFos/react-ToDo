function Card(props) {

  console.log(props.list);
  return (
    <div className='card'>
    <p>{props.todo.title}</p>
     <ul>
      {props.todo.todoList.map( item => {
        return (
          <li key={item.id}>
            <label>
              <input type='checkbox' checked={item.completed} onChange={e => props.handleTodoToggle(item.id, e.target.checked)}></input>
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