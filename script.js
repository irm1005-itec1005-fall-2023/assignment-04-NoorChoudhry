/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */

function addItem() {
  const inputField = document.getElementById("todoInput");
  const inputValue = inputField.value;

// an alert to type a task if the input field is empty
  if (inputValue.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const todoList = document.getElementById("todoList");

  // Creating the list item
  const listItem = document.createElement("li");
  listItem.className = "todoItem";

  // Creating a <p> for task text that input by user
  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = inputValue;

  // Creating button for delete 
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❎";
  deleteButton.className = "delete";
  deleteButton.onclick = function () {
    todoList.removeChild(listItem);
  };

  // Creating button for completed
  const completeButton = document.createElement("button");
  completeButton.textContent = "✅";
  completeButton.className = "complete";
  completeButton.onclick = function () {
    listItem.classList.toggle("completed");
  };

  // attach text and delete button together to list item
  listItem.appendChild(completeButton);
  listItem.appendChild(taskParagraph);
  listItem.appendChild(deleteButton);

  // attach above to the list item to todo list
  todoList.appendChild(listItem);

  // boom clear input field 
  inputField.value = "";
}

/* ------ ALREADY PUT IN STUFF ------ */
//
// Variables
//
// Constants
const appID = "app";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
// If anything is wrong with the app container then end
if (!appContainer) {
  console.error("Error: Could not find app contianer");
  return;
}

// Create an h1 and add it to our app
const h1 = document.createElement("h1");
h1.innerText = headingText;
appContainer.appendChild(h1);

// Init complete
console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();
