

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
