let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => { //Función que se ejecuta cada segundo

let currentTime = new Date();

console.log(currentTime.getHours());
hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();

}, 1000);