/* 
* Ejercicio 01: 
* Define tu nombre, tu número de la suerte, la edad que tienes, tu peso y tu altura.
* Crea una variable con cada uno de los datos y sácalos por consola.
* Muestra las variables entre texto para darle sentido.
*/
let nombre = "Becario";
let numeroDeLaSuerte = 3;
let edad = 17;
let peso = 70;
let altura = 1.75;
console.log("Nombre: " + nombre);
console.log("Número de la suerte: " + numeroDeLaSuerte);
console.log("Edad: " + edad);
console.log("Peso: " + peso);
console.log("Altura: " + altura);
console.log("El developer se llama " + nombre + ", tiene " + edad + " años, pesa " + peso + " kg y mide " + altura + " m.");

/* 
* Ejercicio 02: 
* Calcula el precio total de dos consolas de videojuegos.
* Define el precio de una "PlayStation 5" y una "Xbox Series X".
* Suma ambos precios y muestra el resultado en consola con un mensaje descriptivo.
*/
let precioPS5 = 499.99;
let precioXbox = 599.99;
let precioTotal = precioPS5 + precioXbox;
console.log("El precio total de la PlayStation 5 y la Xbox Series X es: " + precioTotal + " euros.");

/* 
* Ejercicio 03: 
* Inserta tu edad en una variable y di la edad que tendrás dentro de 10 años.
*/
let edadEjercicio03 = 25;
let edadFutura = edad + 10;
console.log("Dentro de 10 años tendré " + edadFutura + " años.");

/* 
* Ejercicio 04: 
* Introduce tu edad en una variable e indica si es mayor de edad o no mediante un boolean.
*/
let edadEjercicio04 = 25;
edadEjercicio04 >= 18 ? console.log("Mayor de edad") : console.log("Menor de edad");

/* 
* Ejercicio 05: 
* Escribe un programa que reconozca si indique mediante un literal boolean si es par o impar.
*/
let numero = 9;
numero % 2 === 0 ? console.log("El numero es par") : console.log("el numero es impar");
const key = "Hola";
obj.bye = "Hola mundo";
obj[key] = "Hola mundo";
obj["key"] = "que pasa ahí!";

delete obj.key; // 
console.log(obj[key]); // Hola mundo


const list = [1, "hello", true, undefined, null, obj, [1, 2, 3]];
list [0] = 23;
console.log(list[0]); // 23

function hola() {
    return "Hola";
}
