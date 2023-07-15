//class ToDoList {
const ToDoList = (title, todos, description, completed) => {
   const  id = crypto.randomUUID()
  //   this.title = title;
  //   this.todos = todos;
  //   this.description = description;
  //   this.completed = completed;
  
  // get todoList() {
  //   return this.todos;
  // }

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