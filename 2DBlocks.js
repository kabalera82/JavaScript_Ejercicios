console.log("Hello World");

/*
 * Definimos las variables que vamos a usar para la animacion
*/
/* VARIABLES DE LA ESFERA*/
var canvas = document.getElementById("myCanvas"); //Capturamos el canvas por su id
var ctx = canvas.getContext("2d"); // Capturamos el canvas y el contexto por el que vamos a dibujar
var ballRadius = 10; // Definimos la variable del radio de la esfera
var x = canvas.width / 2; //Posicion inicial de la esfera en el eje X
var y = canvas.height - 30;//Posicion inicial de la esfera en el eje Y
var dx = 2; // velocidad de la esfera en el eje X
var dy = -2; // velocidad de la esfera en el eje Y

/*VARIABLES DE LA ESFERA*/
var paddleHeight = 10; // Altura de la paleta
var paddleWidth = 75; // Ancho de la paleta
var paddleX = (canvas.width - paddleWidth) /2; // Posicion de la paleta en el eje X

/*variables de control de la paleta*/
var rightPressed = false; // Variable para controlar si la tecla derecha esta presionada
var leftPressed = false; // Variable para controlar si la tecla izquierda esta presionada

/*VARIABLE DE CONTROL DE JUIEGO*/
let gameOver = false; // Variable para controlar si el juego ha terminado

/*EVENTOS DE TECLADO*/
document.addEventListener("keydown", keyDownHandler, false); // Evento para detectar cuando se presiona una tecla
document.addEventListener("keyup", keyUpHandler, false); // Evento para detectar cuando se suelta una tecla

/*
//RECTANGULO AMARILLO
//ctx es el contexto del canvas, el cual nos permite dibujar en el canvas
ctx.beginPath();//inicia un nuevo camino para dibujar
ctx.rect(20, 40, 50, 50); //ctx.rect(x, y, width, height) dibuja un rectangulo en el canvas
//ctx.fillStyle establece el color de relleno del rectangulo
ctx.fillStyle = "rgba(246, 255, 0, 0.5)";//ctx.fillStyle establece el color de relleno del rectangulo
ctx.fill();//Rellena el rectangulo con el color establecido
ctx.closePath(); //ctx.closePath() cierra el camino actual

//CIRCULO VERDE
// ctx.beginPath();// inicia un nuevo camino para dibujar
ctx.arc(240, 160, 20, 0, Math.PI * 2, false); // dibuja un arco o un circulo en el canvas
ctx.fillStyle = "rgba(0, 255, 47, 0.5)"; //establece el color de relleno del circulo
ctx.fill(); // rellena el circulo con el color establecido
ctx.closePath();// cierra el camino actual

//RECTANGULO AZUL
ctx.beginPath(); //inicia un nuevo camino para dibujar
ctx.rect(160, 10, 100, 40); //ctx.rect(x, y, width, height) dibuja un rectangulo en el canvas
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"; //ctx.strokeStyle establece el color del borde del rectangulo
ctx.stroke(); // cierra el camino actual
ctx.fillStyle = "rgba(54, 140, 183, 0.5)";  //ctx.fillStyle establece el color de relleno del rectangulo
ctx.fill(); // rellena el rectangulo con el color establecido
ctx.closePath(); //cierra el camino actual
*/

/*CREAMOS LA FUNCION QUE DIBUJA LA ESFERA*/
function drawBall() { // Creamos la funcion drawBall para dibujar la esfera
    ctx.beginPath(); // Iniciamos un nuevo camino para dibujar
    // Esto lo convertimos en ctx.arc(x,y,10,0, Math.PI*2);
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2); // añado,ps el radio para calcular el tamaño de la esfera
    ctx.fillStyle = "rgba(162, 226, 174, 0.5)"; //establecemos el color del relleno
    ctx.fill(); // cerramos el relleno de la esfera
    ctx.strokeStyle = "rgb(243, 237, 237)"; //establecemos el color del borde
    ctx.stroke(); // cerramos el color del borde de la esfera
    ctx.closePath(); // cerramos el dibujo actual
}

/*CREAMOS LA FUNCION PARA DIBUJAR LA PALETA*/
function drawPaddle() { // Creamos la funcion drawPaddle para dibujar la paleta
    ctx.beginPath();// Iniciamos un nuevo camino para dibujar la paleta
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)"; // Establecemos el color de la paleta
    ctx.fill(); // Rellenamos la paleta con el color establecido
    ctx.closePath(); // Cerramos el camino actual
}

function keyDownHandler(e) {
    if(e.keyCode == 39){ // Si se presiona la tecla derecha (flecha derecha), se ejecuta el siguiente bloque de código
        rightPressed = true; // Si se presiona la tecla derecha, la variable rigthPressed se convierte en verdadera
    }else if(e.keyCode == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode ==39){
        rightPressed = false;
    }else if(e.keyCode == 37){
        leftPressed = false;
    }
}


/* ANIMAMOS LA ESFERA*/
function draw() {
    if (gameOver) return; // Si el juego ha terminado, no ejecutamos más el código
    // Limpiamos el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);// Limpiamos el canvas para que no se dibuje la esfera en la misma posicion
    drawBall();// Llamamos a la funcion que dibuja la esfera
    drawPaddle();// Llamamos a la funcion que dibuja la paleta
    /*
    Evita que una pelota se salga del canvas, rebotando cuando llega a los bordes.
    x, y: la posición actual de la pelota en el canvas (en los ejes horizontal y vertical).
    dx, dy: la velocidad (o dirección) con la que la pelota se mueve en cada fotograma, horizontal (dx) y vertical (dy). 
    */
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius /*canvas.height - ballRadius || y + dy < ballRadius esta es la parte que controla la parte inferior del juego */) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            alert("GAME OVER");
            gameOver = true; // Cambiamos el estado de la variable gameOver a verdadero
        }
    }
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}

//Llamamos a la funcion draw cada 10 milisegundos
setInterval(draw, 10);






