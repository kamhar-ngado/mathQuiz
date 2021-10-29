var h1 = document.querySelector("h1");
h1.className = "cool";

var submit = function () {
  var element = document.getElementById("ans1");

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
    element.classList.toggle("green");
    console.log("Answer is correct !");
  } else {
    element.classList.remove("green");
    console.log("Answer is wrong");
  }
};
