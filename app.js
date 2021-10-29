// let h1 = document.querySelector("h1");
// h1.className = "cool";

// let ans1 = document.getElementById("B1");
// let submit = document.getElementById("submit");

// ans1.addEventListener("click", function () {
//   console.log("click click");
// });

// submit.addEventListener("click", function () {
//   if (ans1.value){
//     console.log("success")
//   }
// });

var radios = document.getElementsByName("MC1");
var val = "";
var submit = function () {
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }
};

if (val == "") {
  alert("opsi jawaban tidak boleh kosong");
} else if (val == "uncorrect") {
  alert("jawabanmu salah");
} else {
  alert("hore!! jawabanmu benar");
}
