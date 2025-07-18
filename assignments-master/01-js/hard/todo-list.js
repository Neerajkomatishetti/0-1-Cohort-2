/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.TodoList = [];
  } 
  add (todo) {
    this.TodoList.push(todo);
  }

  remove (IndexOfTodo) {
    if (IndexOfTodo >= 0 && IndexOfTodo < this.TodoList.length){
      this.TodoList.splice(IndexOfTodo, 1);
    }
  }
    

  update (IndexOfTodo, updatedTodo) {
    if (IndexOfTodo >= 0 && IndexOfTodo < this.TodoList.length){
      this.TodoList[IndexOfTodo] = updatedTodo;
    }
    
  }

  getAll () {
    return this.TodoList;
  }

  get (IndexOfTodo) {
    if (IndexOfTodo >= 0 && IndexOfTodo < this.TodoList.length){
      return this.TodoList[IndexOfTodo];
    }else {
      return null;
    }
  }

  clear () {
    this.TodoList = [];
  }
}

// let Td = new Todo();

// let Atodo = "Make Coffe at 8:00am!";

// Td.add(Atodo);
// Td.add("Wakeup at 6:00am");
// Td.add("Make Maggie for afternoon!")

// let todos = Td.getAll()
// console.log(todos);

module.exports = Todo;
