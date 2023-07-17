function Card(props) {

  function toggleItems(todoId, itemId, completed) {
    props.setTodos((currentTodos) => {
      const newArray = currentTodos.map((todo) => {
        if (todoId === todo.id) {
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
      return newArray;
    })
  }

  function addCompletedToDo(todo){ 
    props.setCompletedTodos((current) => {
      //FIGURE OUT WHY THIS IS BEING CALLED MULTIPLE TIMES
      //This is a hack to get it working by ensuring only 1 ID is in the array.
      for(let i=0; i < current.length; i+= 1){
        console.log(current[i]);
        if (current[i].id === todo.id){
          return [...current];
        }
      }
      props.removeFromCurrentToDos(todo);
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