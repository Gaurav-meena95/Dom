let a = document.createElement("div");
a.innerHTML = "<b> hey </b> <h1>Namste</h1>";
const container = document.querySelector(".container");
container.appendChild(a);

let arry = ["one", "two", "three", "four", "five", "six", "seven"];
let unorder = document.createElement("ul");
for (let i = 0; i < arry.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = arry[i];
  unorder.appendChild(li);
}

container.appendChild(unorder);
