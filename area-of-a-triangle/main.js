const myBase = document.getElementById("myBase");
const myHeight = document.getElementById("myHeight");
const mySubmit = document.getElementById("mySubmit");
const myH3 = document.getElementById("myH3");

let base;
let height;
let area;

mySubmit.onclick = function (){
    base = document.getElementById("myBase").value;
    base = Number(base);

    height = document.getElementById("myHeight").value;
    height = Number(height);

    area = 0.5 * base * height;
    myH3.textContent = area + " " + 'Cm';
}