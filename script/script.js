function task1() {
  window.location.href = "page2.html";
}
var pageColor = document.getElementsByTagName("body")[0];
var headerColor = document.getElementsByTagName("header")[0];
var count = 0;
function task2() {
  if (count == 0) {
    pageColor.style.backgroundColor = "blue";
    headerColor.style.backgroundColor = "red";
    count = 1;
  }
  if (
    pageColor.style.backgroundColor === "blue" &&
    headerColor.style.backgroundColor === "red"
  ) {
    pageColor.style.backgroundColor = "red";
    headerColor.style.backgroundColor = "blue";
  } else {
    pageColor.style.backgroundColor = "blue";
    headerColor.style.backgroundColor = "red";
  }
}
function destroyPage() {
  document.body.removeChild(document.body.children[0]);
  pageColor.style.backgroundColor = "#fff";
  var newSection = document.createElement("section");
  newSection.style.display = "flex";
  newSection.style.justifyContent = "center";
  newSection.innerHTML += '<div id="style">1</div>';
  newSection.innerHTML += '<div id="style">2</div>';
  document.body.append(newSection);
  var edit_style1 = document.querySelectorAll("div")[0];
  var edit_style2 = document.querySelectorAll("div")[1];
  edit_style1.style.width = "100px";
  edit_style1.style.backgroundColor = "red";
  edit_style1.style.margin = "20px";
  edit_style2.style.width = "100px";
  edit_style2.style.backgroundColor = "red";
  edit_style2.style.margin = "20px";
}

var term = {
  Belarus: 30,
  Poland: 15,
  Russia: 22,
  Germany: 17,
  USA: 7,
};
value = 0;
counter = 0;
for (var key in term) {
  value += term[key];
  counter++;
}

function avarageValue() {
  for (var key in term) {
    alert("В " + key + " " + term[key] + " градусов");
  }
  alert("Средняя температура равна " + value / counter + " градусам");
}
var maxTerm = 0;
function maxValue(elem) {
  for (var key in elem) {
    if (elem[key] > maxTerm) {
        maxTerm = elem[key];
    }
  }
  alert("Максимальная температура равна " + maxTerm + " градусам");
}
function callAllFunction(){
    avarageValue();
    maxValue(term);
}