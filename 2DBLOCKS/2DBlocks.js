console.log("Hello World");

/*
 * Definimos las variables que vamos a usar para la animacion
*/
/* VARIABLES DE LA ESFERA*/
let canvas = document.getElementById("myCanvas"); // Capturamos el canvas por su id
let ctx = canvas.getContext("2d"); // Capturamos el canvas y el contexto por el que vamos a dibujar
let ballRadius = 10; // Definimos la variable del radio de la esfera
let x = canvas.width / 2; // Posicion inicial de la esfera en el eje X
let y = canvas.height - 30; // Posicion inicial de la esfera en el eje Y
let dx = 5; // Velocidad inicial de la esfera en el eje X
let dy = -5; // Velocidad inicial de la esfera en el eje Y

/* VARIABLES DE LA PALETA */
let paddleHeight = 10; // Altura de la paleta
let paddleWidth = 75; // Ancho de la paleta
let paddleX = (canvas.width - paddleWidth) / 2; // Posicion de la paleta en el eje X

/* Variables de control de la paleta */
let rightPressed = false; // Variable para controlar si la tecla derecha esta presionada
let leftPressed = false; // Variable para controlar si la tecla izquierda esta presionada

/* VARIABLES DE LOS LADRILLOS */
let brickRowCount = 4; // Cantidad de filas de ladrillos
let brickColumnCount = 6; // Cantidad de columnas de ladrillos
let brickWidth = 75; // Ancho de los ladrillos
let brickHeight = 20; // Altura de los ladrillos
let brickPadding = 5; // Espacio entre los ladrillos
let brickOffsetTop = 30; // Espacio desde la parte superior del canvas hasta la primera fila de ladrillos
let brickOffsetLeft = 15; // Espacio desde la parte izquierda del canvas hasta la primera columna de ladrillos

/* VARIABLES DE PUNTUACIÓN Y VIDAS */
let level = 1; // Variable para controlar el nivel del juego
let score = 0; // Variable para controlar la puntuación del jugador
let lives = 3; // Variable para controlar el número de vidas del jugador

/* VARIABLES DE LOS LADRILLOS */
let bricks = []; // Creamos un array vacío para guardar los ladrillos
for (let i = 0; i < brickColumnCount; i++) {
    bricks[i] = []; // Creamos un array vacío para cada columna de ladrillos
    for (let j = 0; j < brickRowCount; j++) {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; // Color aleatorio
        bricks[i][j] = { x: 0, y: 0, color: randomColor, status: 1 }; // Asignamos el color fijo al ladrillo
    }
}

/* VARIABLE DE CONTROL DE JUEGO */
let gameOver = false; // Variable para controlar si el juego ha terminado

/* EVENTOS DE CONTROL */
document.addEventListener("mousemove", mouseMoveHandler, false); // Evento para detectar el movimiento del ratón
document.addEventListener("keydown", keyDownHandler, false); // Evento para detectar cuando se presiona una tecla
document.addEventListener("keyup", keyUpHandler, false); // Evento para detectar cuando se suelta una tecla

/*2.- DIBUJAMOS LA ESFERA*/
function drawBall() {
    ctx.beginPath(); // Iniciamos un nuevo camino para dibujar
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2); // Dibujamos la esfera
    ctx.fillStyle = "rgb(255, 0, 0)"; // Establecemos el color del relleno
    ctx.fill(); // Rellenamos la esfera
    ctx.strokeStyle = "rgb(0, 0, 0)"; // Establecemos el color del borde
    ctx.stroke(); // Dibujamos el borde de la esfera
    ctx.closePath(); // Cerramos el camino actual
}

/*3.- DIBUJAMOS LA PALETA*/
function drawPaddle() {
    ctx.beginPath(); // Iniciamos un nuevo camino para dibujar la paleta
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight); // Dibujamos la paleta
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)"; // Establecemos el color de la paleta
    ctx.fill(); // Rellenamos la paleta
    ctx.closePath(); // Cerramos el camino actual
}

/*4.- DIBUJAMOS LOS LADRILLOS*/
function drawBricks() {
    for (let i = 0; i < brickColumnCount; i++) { // Recorremos las columnas de ladrillos
        for (let j = 0; j < brickRowCount; j++) { // Recorremos las filas de ladrillos
            if (bricks[i][j].status == 1) { // Solo dibujamos ladrillos activos
                let brickX = brickOffsetLeft + i * (brickWidth + brickPadding); // Posición en X
                let brickY = brickOffsetTop + j * (brickHeight + brickPadding); // Posición en Y
                bricks[i][j].x = brickX; // Asignamos la posición en X
                bricks[i][j].y = brickY; // Asignamos la posición en Y
                ctx.beginPath(); // Iniciamos un nuevo camino
                ctx.rect(brickX, brickY, brickWidth, brickHeight); // Dibujamos el ladrillo
                ctx.fillStyle = bricks[i][j].color; // Usamos el color fijo asignado al ladrillo
                ctx.fill();
                ctx.closePath(); // Cerramos el camino
            }
        }
    }
}

/* 5 Funciones de puntuación y vidas*/

function drawScore() {
    ctx.font = "16px Arial"; // Establecemos la fuente y el tamaño del texto
    ctx.fillStyle = "#0095DD"; // Establecemos el color del texto
    ctx.fillText("Score: " + score, 8, 20); // Dibujamos el texto en el canvas
}

/* 6.- DIBUJAMOS LAS VIDAS */

function drawLives() {
    ctx.font = "16px Arial"; // Establecemos la fuente y el tamaño del texto
    ctx.fillStyle = "#0095DD"; // Establecemos el color del texto
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20); // Dibujamos el texto en el canvas
}

/* 7.- DIBUJAMOS EL NIVEL */

function drawLevel() {
    ctx.font = "16px Arial"; // Establecemos la fuente y el tamaño del texto
    ctx.fillStyle = "#0095DD"; // Establecemos el color del texto
    ctx.fillText("Level: " + level, canvas.width / 2 - 30, 20); // Dibujamos el texto en el canvas
}

/* 8.- DIBUJAMOS FUNCIONES DE CONTROL */
function mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft; // Obtenemos la posición del ratón en el eje X
    if (relativeX > 0 && relativeX < canvas.width) { // Si el ratón está dentro del canvas
        paddleX = relativeX - paddleWidth / 2; // Ajustamos la posición de la paleta
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) { // Flecha derecha
        rightPressed = true;
    } else if (e.keyCode == 37) { // Flecha izquierda
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

/** 9.- LOGICA DE COLISIONES */

function collisionDetection() {
    for (let i = 0; i < brickColumnCount; i++) {
        for (let j = 0; j < brickRowCount; j++) {
            const b = bricks[i][j];
            if (b.status === 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy; // Rebota en el ladrillo
                    b.status = 0; // Desactiva el ladrillo
                    score++; // Incrementa la puntuación

                    if (score % (brickRowCount * brickColumnCount) === 0) { // Si se eliminan todos los ladrillos
                        level++; // Incrementa el nivel
                        dx *= 1.2; // Incrementa la velocidad en el eje X
                        dy *= 1.2; // Incrementa la velocidad en el eje Y
                        resetBricks(); // Reinicia los ladrillos
                        drawMessage(`LEVEL ${level}!`); // Muestra el mensaje del nuevo nivel
                    }
                }
            }
        }
    }
}

/* 10.- RESETEA LOS LADRILLOS */
function resetBricks() {
    for (let i = 0; i < brickColumnCount; i++) {
        for (let j = 0; j < brickRowCount; j++) {
            bricks[i][j].status = 1; // Reinicia el estado del ladrillo, pero mantiene su color
        }
    }
}

/* 11.- DIBUJAMOS MENSAJEs DE JUEGO */

function drawMessage(message) {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.textAlign = "center";
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

function drawGameOver() {
    // Dibuja un cuadro en el centro del canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)"; // Fondo semitransparente
    ctx.fillRect(canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);

    // Dibuja el texto "Game Over"
    ctx.font = "24px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 40);

    // Dibuja los botones
    ctx.fillStyle = "#FF0000"; // Botón "Reiniciar"
    ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2, 80, 40);
    ctx.fillStyle = "#00FF00"; // Botón "Salir"
    ctx.fillRect(canvas.width / 2 + 20, canvas.height / 2, 80, 40);

    // Texto de los botones
    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Reiniciar", canvas.width / 2 - 60, canvas.height / 2 + 25);
    ctx.fillText("Salir", canvas.width / 2 + 60, canvas.height / 2 + 25);

    // Agrega eventos de clic para los botones
    canvas.addEventListener("click", handleGameOverClick);
}

function handleGameOverClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Verifica si se hizo clic en el botón "Reiniciar"
    if (mouseX > canvas.width / 2 - 100 && mouseX < canvas.width / 2 - 20 &&
        mouseY > canvas.height / 2 && mouseY < canvas.height / 2 + 40) {
        document.location.reload(); // Reinicia el juego
    }

    // Verifica si se hizo clic en el botón "Salir"
    if (mouseX > canvas.width / 2 + 20 && mouseX < canvas.width / 2 + 100 &&
        mouseY > canvas.height / 2 && mouseY < canvas.height / 2 + 40) {
        alert("Gracias por jugar!"); // Muestra un mensaje de despedida
        canvas.removeEventListener("click", handleGameOverClick); // Elimina el evento
    }
}

/* 12.- FUNCIÓN PRINCIPAL DEL JUEGO */
function draw() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    collisionDetection();
    drawBricks();
    drawBall();
    drawScore();
    drawLives();
    drawPaddle();
    drawLevel();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            lives--;
            if (!lives) {
                gameOver = true;
                drawGameOver();
                return;
            } else {
                // Reinicia la posición de la bola y la paleta
                x = canvas.width / 2;
                y = canvas.height - 30;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();