console.log("Hello World");

/*
 * Definimos las variables que vamos a usar para la animacion
*/
/* VARIABLES DE LA ESFERA*/
let canvas = document.getElementById("myCanvas"); //Capturamos el canvas por su id
let ctx = canvas.getContext("2d"); // Capturamos el canvas y el contexto por el que vamos a dibujar
let ballRadius = 10; // Definimos la variable del radio de la esfera
let x = canvas.width / 2; //Posicion inicial de la esfera en el eje X
let y = canvas.height - 30;//Posicion inicial de la esfera en el eje Y
let dx = 2; // velocidad de la esfera en el eje X
let dy = -2; // velocidad de la esfera en el eje Y


/*VARIABLES DE LA ESFERA*/
let paddleHeight = 10; // Altura de la paleta
let paddleWidth = 75; // Ancho de la paleta
let paddleX = (canvas.width - paddleWidth) / 2; // Posicion de la paleta en el eje X

/*variables de control de la paleta*/
let rightPressed = false; // Variable para controlar si la tecla derecha esta presionada
let leftPressed = false; // Variable para controlar si la tecla izquierda esta presionada

/*VARIABLES DE LOS LADRILLOS*/
let brickRowCount = 4; // Cantidad de filas de ladrillos
let brickColumnCount = 6; // Cantidad de columnas de ladrillos
let brickWidth = 75; // Ancho de los ladrillos
let brickHeight = 20; // Altura de los ladrillos
let brickPadding = 5; // Espacio entre los ladrillos
let brickOffsetTop = 30; // Espacio desde la parte superior del canvas hasta la primera fila de ladrillos
let brickOffsetLeft = 15; // Espacio desde la parte izquierda del canvas hasta la primera columna de ladrillos

/*VARIABLE DE PUNTUACION*/
let score = 0;
/*VARIABLE DE NUMERO DE VIDAS*/
let lives = 3; // Variable para controlar el numero de vidas del jugador

/*VARIABLE DE LOS LADRILLOS*/
//Guardamos los ladrillos en un array bidimensional
let bricks = []; // Creamos un array vacio para guardar los ladrillos
for (i = 0; i < brickColumnCount; i++) {
    bricks[i] = []; // Creamos un array vacio para cada columna de ladrillos
    for (j = 0; j < brickRowCount; j++) {
        bricks[i][j] = { x: 0, y: 0 }; // Creamos un objeto para cada ladrillo con su posicion y estado
    }
}


/*VARIABLE DE CONTROL DE JUIEGO*/
let gameOver = false; // Variable para controlar si el juego ha terminado

/*EVENTOS DE CONTROL DE RATON*/
document.addEventListener("mousemove", mouseMoveHandler, false); // Evento para detectar el movimiento del raton

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
    ctx.fillStyle = "rgb(255, 0, 0)"; //establecemos el color del relleno
    ctx.fill(); // cerramos el relleno de la esfera
    ctx.strokeStyle = "rgb(0, 0, 0)"; //establecemos el color del borde
    ctx.stroke(); // cerramos el color del borde de la esfera
    ctx.closePath(); // cerramos el dibujo actual
}

/*CREAMOS LA FUNCION PARA DIBUJAR LA PALETA*/
function drawPaddle() { // Creamos la funcion drawPaddle para dibujar la paleta
    ctx.beginPath();// Iniciamos un nuevo camino para dibujar la paleta
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)"; // Establecemos el color de la paleta
    ctx.fill(); // Rellenamos la paleta con el color establecido
    ctx.closePath(); // Cerramos el camino actual
}

/*CREAMOS LA FUNCION PARA DIBUJAR LOS LADRILLOS*/
// INICIALIZAMOS LOS LADRILLOS CON UN COLOR ALEATORIO PARA QUE SE QUEDEN FIJOS
for (let i = 0; i < brickColumnCount; i++) {
    bricks[i] = [];
    for (let j = 0; j < brickRowCount; j++) {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        bricks[i][j] = { x: 0, y: 0, color: randomColor, status: 1}; // Asignamos un color fijo a cada ladrillo && añadimos la propiedad status
    }
}

/*CREAMOS LA FUNCION PARA DIBUJAR LOS LADRILLOS*/
function drawBricks() {
    for (let i = 0; i < brickColumnCount; i++) { // Recorremos las columnas de ladrillos
        for (let j = 0; j < brickRowCount; j++) { // Recorremos las filas de ladrillos
            if (bricks[i][j].status == 1) {
                let brickX = brickOffsetLeft + i * (brickWidth + brickPadding); // Posición en X
                let brickY = brickOffsetTop + j * (brickHeight + brickPadding); // Posición en Y
                bricks[i][j].x = brickX; // Asignamos la posición en X
                bricks[i][j].y = brickY; // Asignamos la posición en Y
                ctx.beginPath(); // Iniciamos un nuevo camino
                ctx.rect(brickX, brickY, brickWidth, brickHeight); // Dibujamos el ladrillo
                ctx.fillStyle = bricks[i][j].color; // Usamos el color asignado al ladrillo
                ctx.fill();
                ctx.closePath(); // Cerramos el camino
            }
        }
    }
}

/*FUNCION DE PUNTUACIóN*/
function drawScore() {
    ctx.font = "16px Arial"; // Establecemos la fuente y el tamaño del texto
    ctx.fillStyle = "#0095DD"; // Establecemos el color del texto
    ctx.fillText("Score: " + score, 8, 20); // Dibujamos el texto en el canvas
}

/* FUNCION PARA PINTAR EL NUMERO DE VIDAS*/
function drawLives() {
    ctx.font='16px Arial'; // Establecemos la fuente y el tamaño del texto
    ctx.fillStyle='#0095DD'; // Establecemos el color del texto
    ctx.fillText('Lives: '+lives, canvas.width-65, 20); // Dibujamos el texto en el canvas
}

/*FUNCION PARA DETECTAR COLISIONES CON LOS LADRILLOS*/
function collisionDetection() {
    for (i = 0; i < brickColumnCount; i++) {
        for (j = 0; j < brickRowCount; j++) {
            const b = bricks[i][j]; // Guardamos el ladrillo en una variable

            // DETECTAMOS LA COLISION CON LOS LADRILLOS CUANDO EL CENTRO DE LA ESFERA ESTA DENTRO DEL LADRILLO
            // es decir cuando  posicion "X" de la bola es mayor  que la "X" del ladrillo y menos que la "X" del ancho del ladrillo.
            // y cuando la posición "Y" de la bola es mayor que la "Y" del ladrillo y menos que la "Y" del alto del ladrillo.

            if (b.status === 1) {
                if (x > b.x &&
                    x < b.x + brickWidth && 
                    y > b.y && 
                    y < b.y + brickHeight
                ) {
                    dy = -dy; // Cambiamos la direccion de la esfera al rebotar con el ladrillo
                    b.status = 0; // Cambiamos el estado del ladrillo a 0 para que no se dibuje mas)
                    score++; // Aumentamos la puntuacion en 1
                    if (score === brickRowCount * brickColumnCount) { // Si la puntuacion es igual al total de ladrillos
                        alert("YOU WIN, CONGRATULATIONS!"); // Mensaje de victoria
                        document.location.reload(); // Recargamos la pagina para reiniciar el juego
                        clearInterval(interval); // Limpiamos el intervalo
                    }
                }
            }

        }
    }
}

/* CREAMOS LA FUNCION PARA DESPLAZAR LA PALETA*/
// La función keyDownHandler se ejecuta cuando se presiona una tecla
function keyDownHandler(e) {
    console.log("Tecla presionada:", e.key); //!!!!!!Muestra la tecla presionada en la consola !!!!!!!!
    if (e.keyCode == 39) { // Si se presiona la tecla derecha (flecha derecha), se ejecuta el siguiente bloque de código
        rightPressed = true; // Si se presiona la tecla derecha, la variable rigthPressed se convierte en verdadera
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}
// La función keyUpHandler se ejecuta cuando se suelta una tecla
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

/*FUNCION PARA MOVER LA PALETA CON EL RATON*/
function mouseMoveHandler(e){
    const relativeX = e.clientX - canvas.offsetLeft; // Obtenemos la posicion del raton en el eje X
    if(relativeX > 0 && relativeX < canvas.width){ // Si la posicion del raton es mayor que 0 y menor que el ancho del canvas
        paddleX = relativeX - paddleWidth/2; // Asignamos la posicion de la paleta al raton menos la mitad del ancho de la paleta
    }
}


/* ANIMAMOS LA ESFERA*/
function draw() {
    if (gameOver) return; // Si el juego ha terminado, no ejecutamos más el código
    // Limpiamos el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);// Limpiamos el canvas para que no se dibuje la esfera en la misma posicion
    collisionDetection()
    drawBricks(); // Llamamos a la funcion que dibuja los ladrillos
    drawBall();// Llamamos a la funcion que dibuja la esfera
    drawScore(); // Llamamos a la funcion que dibuja la puntuacion
    drawLives(); // Llamamos a la funcion que dibuja el numero de vidas
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
            lives--;
            if (!lives) {
                alert("GAME OVER");
                document.location.reload();
                clearInterval(interval); // Needed for Chrome to end game
              } else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
              }
        }
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}

//Llamamos a la funcion draw cada 10 milisegundos
interval = setInterval(draw, 10);






