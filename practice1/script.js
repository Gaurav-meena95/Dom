const headto = document.querySelectorAll(".tag");
let color = ["orange", "blue", "red", "orange", "pink", "green"];
for (let i = 0; i < headto.length; i++) {
  headto[i].style.backgroundColor = color[i];
}

// Array.from(headto).map((ele)=>{

// })
// let p = document.querySelector(".frist");
// console.log(p);
// p.addEventListener('click',()=>{
//   p.classList.toggle('second')
// })

let change = false;
let btn = document.querySelector(".btn_2");
btn.addEventListener("click", () => {
  change = !change;


  if (change) {
    btn.innerText = "Remove from Friend"
    btn.style.backgroundColor = "red";
  } else {
    btn.innerText = "Add Friend"
    btn.style.backgroundColor = "green";
  }
});
