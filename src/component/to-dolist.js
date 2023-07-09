class ToDoList {
  constructor(title, todos, description, completed){
    this.id = crypto.randomUUID()
    this.title = title;
    this.todos = todos;
    this.description = description;
    this.completed = completed;
  }
  
  get todoList() {
    return this.todos;
  }
}

export default ToDoList;