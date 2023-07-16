function Card(props) {

  function toggleItems(todoId, itemId, completed) {
    console.log('clicked')
    props.setTodos((currentTodos) => {
      const newArray = currentTodos.map((todo) => {
        if (todoId === todo.id) {
          console.log('found todo')
          const newTodos = getClickedTodo(todo, itemId, completed);
          const newToDoItem = {...todo, todos: newTodos};
          if (newToDoItem.checkComplete()){
            addCompletedToDo(newToDoItem);
          } else {
            removeCompletedToDo(newToDoItem);
          }
          return newToDoItem;
        }
        return todo;
      })
      console.log(newArray);
      return newArray;
    })
  }



  function addCompletedToDo(todo){ 
    props.setCompletedTodos((current) => {
      return [...current, todo];
    })
  }

  function removeCompletedToDo(todo){ 
    props.setCompletedTodos((current) => {
      return current.filter(item => item.id !== todo.id);
    })
  }

  function getClickedTodo(todo, itemId, completed){
    return todo.todos.map((item) => {
      if (itemId === item.id) {
        item.completed = completed;
      }
      return item;
    })
  }

  return (
    <div className='card'>
    <p>{props.todo.title}</p>
     <ul>
      {props.todo.todos.map( item => {
        return (
          <li key={item.id}>
            <label>
              <input type='checkbox' checked={item.completed} onChange={e => toggleItems(props.todo.id, item.id, e.target.checked)}></input>
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