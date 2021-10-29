let h1 = document.querySelector("h1");
h1.className = "cool";

// number 1
function check1() {
  let ans1D = document.getElementById("ans1D");
  let radios = document.getElementsByName("MC1");
  var val = "";
  for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }

  if (val == "") {
    alert("please select choice answer");
  } else if (val == "correct1") {
    ans1D.classList.toggle("green");
    alert("Answer is correct !");
  } else {
    ans1D.classList.remove("green");
    alert("Answer is wrong");
  }
}

// number 2
function check2() {
  let ans2C = document.getElementById("ans2C");
  let radios = document.getElementsByName("MC2");
  var val = "";
  for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }

  if (val == "") {
    console.log("please select choice answer");
  } else if (val == "correct2") {
    ans2C.classList.toggle("green");
    alert("Answer is correct !");
  } else {
    ans2C.classList.remove("green");
    alert("Answer is wrong");
  }
}
