var h1 = document.querySelector("h1");
h1.className = "cool";


function myFunction() {
  var element = document.getElementById("ans1");
  element.classList.toggle("green");
}


var submit = function () {
  var radios = document.getElementsByName("MC1");
  var val = "";
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }

  if (val == "") {
    console.log("please select choice answer");
  } else if (val == "correct") {
    console.log("Answer is correct !");
  } else {
    console.log("Answer is wrong");
  }
};
