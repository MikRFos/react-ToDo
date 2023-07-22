function Card({todo, toggleItems, deleteTodo, layout, setLayout}) {

  function handleClick() {
    setLayout((current) =>  {return {...current, style:'list'}})
  }
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
    <button onClick={(() => deleteTodo(todo))}>Delete</button>
    {layout.style === 'single' ? <button onClick={handleClick}>return to list</button> : null}
  </div>
  )
}

export default Card;