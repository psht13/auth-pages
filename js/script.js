const input1 = document.getElementById("pwd-input1");
const input2 = document.getElementById("pwd-input2");

const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");

const button21 = document.getElementById("button21");
const button22 = document.getElementById("button22");

document.getElementById("button11").addEventListener("click", function () {
  document.getElementById("button11").classList.remove("visible");
  document.getElementById("button12").classList.add("visible");
  document.getElementById("pwd-input1").setAttribute("type", "text");
});

document.getElementById("button12").addEventListener("click", function () {
  document.getElementById("button12").classList.remove("visible");
  document.getElementById("button11").classList.add("visible");
  document.getElementById("pwd-input1").setAttribute("type", "password");
});

document.getElementById("button21").addEventListener("click", function () {
  document.getElementById("button21").classList.remove("visible");
  document.getElementById("button22").classList.add("visible");
  document.getElementById("pwd-input2").setAttribute("type", "text");
});

document.getElementById("button22").addEventListener("click", function () {
  document.getElementById("button22").classList.remove("visible");
  document.getElementById("button21").classList.add("visible");
  document.getElementById("pwd-input2").setAttribute("type", "password");
});
