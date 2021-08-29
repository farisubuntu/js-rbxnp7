// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function logIt(msg,x) {
  appDiv.innerHTML += `<p>${msg}: ${x.toString()}</p>`;
}

function doSonmething(a) {
  b = a + doSonmethingElse(a * 2);
  logIt("doSomethingElese()",b * 3);
}

function doSonmethingElse(a) {
  logIt("doSomethingElese()...",a);
  return a - 1;
}
var b;
doSonmething(2);
