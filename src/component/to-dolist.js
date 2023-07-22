//class ToDoList {
const ToDoList = (title, todos, description, completed) => {
  const  id = crypto.randomUUID()
  function checkComplete(){
    for(let item of this.todos){
      if (!item.completed){
        return false;
      }
    }
    return true;
  }

  return {title, todos, description, completed, id, checkComplete};
}

export default ToDoList;