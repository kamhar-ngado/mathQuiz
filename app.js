var h1 = document.querySelector("h1");
h1.className = "cool";

let ans1 = document.getElementById("B1");
let submit = document.getElementById("submit");

ans1.addEventListener("click", function () {
  console.log("click click");
});

submit.addEventListener("click", function () {
  if (ans1.value){
    console.log("success")
  }
});
