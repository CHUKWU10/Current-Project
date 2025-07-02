const PI = 3.142;
let radius;

const myH3 = document.getElementById("myH3");
const mySubmit = document.getElementById("mySubmit");


mySubmit.onclick = function (){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = PI * radius**2;
    myH3.textContent = circumference + " " + 'Cm';
}
