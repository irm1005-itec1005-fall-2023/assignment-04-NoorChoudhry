/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */

/* Assignment 04: Finishing a Todo List App */

function addItem() {
  var inputField = document.getElementById("todoInput");
  var inputValue = inputField.value;

  if (inputValue.trim() === "") {
      alert("Please enter a task!");
      return;
  }

  var todoList = document.getElementById("todoList");

  // Create list item
  var listItem = document.createElement("li");
  listItem.className = "todoItem";

  // Create span for task text
  var taskSpan = document.createElement("span");
  taskSpan.textContent = inputValue;

  // Create span for delete button
  var deleteSpan = document.createElement("span");
  deleteSpan.textContent = "Delete";
  deleteSpan.className = "delete";
  deleteSpan.onclick = function () {
      todoList.removeChild(listItem);
  };

  // Append task text and delete button to list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteSpan);

  // Append list item to todo list
  todoList.appendChild(listItem);

  // Clear input field
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



//
// Variables
//
/*
// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

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
*/