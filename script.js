// Code goes here
var todoList = {
  todos: [],
  displayTodo: function() {
    if (this.todos.length === 0) {
      console.log("Your TodoList is empty");
    } else {
      console.log("My Todo List:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].isCompleted === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      isCompleted: false
    });
    this.displayTodo();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodo();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.isCompleted = !todo.isCompleted;
    this.displayTodo();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].isCompleted === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].isCompleted = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].isCompleted = true;
      }
    }
    this.displayTodo();
  }
};

var handlers = {
  displayTodo: function() {
    todoList.displayTodo();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodo();
  },
  addTodo: function() {
    var addTodoText = document.getElementById('addTodoText');
    todoList.addTodo(addTodoText.value);
    addTodoText.value = "";
    view.displayTodo();
  },
  changeTodo: function() {
    var todoListPosition = document.getElementById('todoListPosition');
    var newTodoText = document.getElementById('newTodoText');
    todoList.changeTodo(todoListPosition.value, newTodoText.value);
    todoListPosition.value = "";
    newTodoText.value = "";
    view.displayTodo();
  },
  deleteTodo: function() {
    var deleteTodoPosition = document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.value);
    deleteTodoPosition.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPosition = document.getElementById('toggleCompleted');
    todoList.toggleCompleted(toggleCompleted.value);
    toggleCompletedPosition.value = "";
    view.displayTodo();
  }
};

var view = {
  displayTodo: function() {
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoListWithCompleted = "";
      
      if (todo.isCompleted === true) {
        todoListWithCompleted = '(x) ' + todo.todoText;
      } else {
        todoListWithCompleted = '( ) ' + todo.todoText;
      }
      
      todoUl.appendChild(todoLi);
      todoLi.textContent = todoListWithCompleted;
    }
  }
}