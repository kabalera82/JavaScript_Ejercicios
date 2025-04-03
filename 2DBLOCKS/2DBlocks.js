console.log("Hello World");

/*
 * Definimos las variables que vamos a usar para la animacion
*/
//Capturamos el canvas y el contexto por el que vamos a dibujar
var canvas = document.getElementById("myCanvas");
// Capturamos el canvas y el contexto por el que vamos a dibujar
var ctx = canvas.getContext("2d");
//Posicion inicial de la esfera en el eje X
var x = canvas.width / 2; 
//Posicion inicial de la esfera en el eje Y
var y = canvas.height -30; 
//velocidad de la esfera en el eje X
var dx = 2;
//velocidad de la esfera en el eje Y
var dy = -2; 

/*
//Aqui estan las instrucciones para dibujar un rectangulo
//ctx es el contexto del canvas, el cual nos permite dibujar en el canvas
//ctx.beginPath() inicia un nuevo camino para dibujar
ctx.beginPath();
//ctx.rect(x, y, width, height) dibuja un rectangulo en el canvas
ctx.rect(20, 40, 50, 50);
//ctx.fillStyle establece el color de relleno del rectangulo
ctx.fillStyle = "rgba(246, 255, 0, 0.5)";
//ctx.fill() rellena el rectangulo con el color establecido
ctx.fill();
//ctx.closePath() cierra el camino actual
ctx.closePath();

//circulo verde
ctx.beginPath();
//Dibujamos el circulo
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
//ctx.fillStyle establece el color de relleno del circulo
ctx.fillStyle = "rgba(0, 255, 47, 0.5)";
//ctx.fill() rellena el circulo con el color establecido
ctx.fill();
ctx.closePath();
//rectangulo azul
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle establece el color del borde del rectangulo
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.fillStyle = "rgba(54, 140, 183, 0.5)";
ctx.fill();
ctx.closePath();
*/

/*dibujamos la esfera*/

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,10,0, Math.PI*2);
    ctx.fillStyle = "rgba(162, 226, 174, 0.5)";
    ctx.fill();
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.stroke();
}
/* ANIMAMOS LA ESFERA*/

function draw(){
ctx .clearRect(0, 0, canvas.width, canvas.height); // Limpiamos el canvas
// Llamamos a la funcion para dibujar la esfera
drawBall();

    // Actualizamos la posición de la esfera
    // Cambiamos la posición de la esfera en el eje X y Y
    x += dx;
    y +=dy;
}
setInterval(draw, 10);

