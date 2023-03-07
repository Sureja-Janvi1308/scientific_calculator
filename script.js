function addChar(dis, character) {
  if (dis.value == 0 || dis.value == null) {
    dis.value = character;
  }
  else {
    dis.value += character;
  }
}
function deleteChar() {
  const dis = document.getElementById('display');
  dis.value = dis.value.slice(0, -1);
}
function solve() {
  const dis = document.getElementById('display');

  dis.value = eval(dis.value);
  
}

let memory = 0;
function memoryStore() {
  var dis = document.getElementById("display");
  memory = dis.value;
  dis.value = "";
}
function memoryRecall() {
  var dis = document.getElementById("display");
  dis.value = memory;
}
function memoryClear() {
  memory = 0;
  dis.value = memory;
}
function memoryAdd() {
  var dis = document.getElementById("display");
  memory = parseInt(memory);
  memory += parseInt(dis.value);
  dis.value = memory;
}
function memorySub() {
  var dis = document.getElementById("display");
  memory = parseInt(memory);
  memory -= parseInt(dis.value);
  dis.value = memory;
}
function x2() {
  const dis = document.getElementById('display');
  dis.value = Math.pow(dis.value, 2);
}
function tenToPowerX() {
  const dis = document.getElementById('display');

  dis.value = Math.pow(10, dis.value);

}
function fact() {
  const dis = document.getElementById('display');
  let result = 1;
  for (let i = 1; i <= dis.value; i++) {
    result *= i;
  }
  dis.value = result;
}
function sin() {
  const dis = document.getElementById('display');
  dis.value = Math.sin(dis.value);
}
function cos() {
  const dis = document.getElementById('display');
  dis.value = Math.cos(dis.value);
}
function tan() {
  const dis = document.getElementById('display');
  dis.value = Math.tan(dis.value);
}
function percentage() {

  const dis = document.getElementById('display');
  dis.value = parseFloat(dis.value) / 100;
}
function log() {
  const dis = document.getElementById('display');
  dis.value = Math.log10(dis.value);
}
function ln() {
  const dis = document.getElementById('display');
  dis.value = Math.log(dis.value);
}
function rootx() {
  const dis = document.getElementById('display');
  dis.value = Math.pow(dis.value, 1 / 2);
}
function changeSign() {
  const dis = document.getElementById('display');
  {
    if (dis.value.substr(0, 1) == "-")
      dis.value = dis.value.substr(1, dis.value.length);
    else
      dis.value = "-" + dis.value;
  }
}
function exp() {
  const dis = document.getElementById('display');
  dis.value = Math.exp(dis.value);
}
function reciprocal() {
  const dis = document.getElementById('display');
  dis.value = 1 / (dis.value);
}
