let container = document.querySelector(".todo");
let inputText = document.querySelector("#inputText");
let btn = document.querySelector("#btn");
let ul = document.querySelector(".ul");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function Addtodo() {
  if (inputText.value == "") {
    alert("ye bahi kuch to likhega");
    return;
  }
  const formatedStirng = inputText.value.trim();
  const todo = {
    id: Date.now(),
    todoItem: formatedStirng,
    isComplete: false,
  };
  tasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // createOneTodo(todo);
  inputText.value = "";
  makeComponents();
}

// function createOneTodo(data) {
//   let li = document.createElement("li");
//   let text = data.todoItem;
//   li.innerHTML = text;
//   const btnremove = document.createElement("button");
//   btnremove.innerHTML = "Remove";
//   btnremove.classList.add("remove");
//   btnremove.onclick = () => li.remove();
//   li.appendChild(btnremove);
//   ul.appendChild(li);
// }

// function createTodo() {
//   tasks.map((data) => {
//     createOneTodo(data);
//   });
// }
btn.addEventListener("click", Addtodo);
// createTodo();

function makeComponents() {
  ul.innerHTML = ''
  tasks.map((ele) => {
let uniqeId = ele.id
    element = document.createElement("div");
    element.innerHTML = `<span class ='text'>${ele.todoItem}</span><button class = 'edit'>Edit</button> <button class ='delete'>Delete</button>`;
    const text = element.querySelector(".text");
    const edit = element.querySelector(".edit");
    const deleteBtn = element.querySelector(".delete");

    deleteBtn.addEventListener('click',deletItem);
    function deletItem(){
      filtered = tasks.filter((ele)=>ele.id !=uniqeId )
      console.log(filtered)
    }

    ul.appendChild(element);
  });
}
