const myLength = document.getElementById("myLength");
// const myWidth = document.getElementById("myWidth");
const mySubmit = document.getElementById("mySubmit");
const myH3 = document.getElementById("myH3");

let length;
// let width;
let area;

mySubmit.onclick = function (){
    length = document.getElementById("myLength").value;
    length = Number(length);

    // width = document.getElementById("myWidth").value;
    // width = Number(width);

    area = length**2;
    myH3.textContent = area + " " + 'Cm';
}