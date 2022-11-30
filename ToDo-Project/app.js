const form = document.querySelector('#form-todo');
const input = document.querySelector('input[name="ToDo"]');
const ul = document.querySelector('#list');
const trash = document.createElement('button');

//(CAN'T GET IT TO WORK) retrieve from localStorage

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.classList.toggle('completed');
  }
  ul.appendChild(newTodo);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    //test
    newTodo.isCompleted = false;
    newTodo.classList.add('todo'); 
    input.value = '';
    form.reset();
    ul.appendChild(newTodo);

    // (CAN'T GET IT TO WORK) save to localStorage

    // savedTodos.push({ task: newTodo.innerText, isCompleted: false });
    // localStorage.setItem("todos", JSON.stringify(savedTodos));
})

// CLICK EVENTS
// Single Click: creates and moves button
// Doulbe Click: toggles .completed class on li's and runs clearSelection function below
ul.addEventListener('click', function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "LI"){
        trash.classList.add('item');
        e.target.appendChild(trash);
    }
})

ul.addEventListener('dblclick', function(e){
    if(e.target.tagName === "LI"){
        clearSelection();
        e.target.classList.toggle('completed');
    }

    // (CAN'T GET IT TO WORK) breaks for duplicates - another option is to have dynamic IDs

    // for (let i = 0; i < savedTodos.length; i++) {
    //     if (savedTodos[i].task ===  e.target.innerText) {
    //       savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
    //       localStorage.setItem("todos", JSON.stringify(savedTodos));
    //     }
    // }
})

//Prevents Blue selection of Text on DoubleClick: IGNORE
function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}



