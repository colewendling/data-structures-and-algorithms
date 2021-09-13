// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
// shift option down = auto copy down

// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.If no matches are found, null is returned.

// A DOMString containing one or more selectors to match.This string must be a valid CSS selector string; if it isn't, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more about selectors and how to manage them.

// If you need a list of all elements matching the specified selectors, you should use querySelectorAll() instead.

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();

  // Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);

  //check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);

  //clear todoInput Value
  todoInput.value = "";
}

function deleteCheck(event) {
  console.log(event.target);
  const item = event.target;

  //delete todo

  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

  //check mark
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")){
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}