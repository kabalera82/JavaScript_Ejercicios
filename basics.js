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

/*
 * Crea un programa que realice las siguientes operaciones con un array:
 *
 * 1. Añadir un elemento al final del array.
 * 2. Añadir un elemento al principio del array.
 * 3. Eliminar el último elemento del array.
 * 4. Eliminar el primer elemento del array.
 * 5. Eliminar un elemento en una posición específica del array.
 * 6.Invierte el orden de los elementos del array.
 * 7. Ordena el array en orden ascendente.
 * 8. Crea un nuevo array llamado pares que contenga solo los números pares del array original utilizando un método.
 * 9. Calcula la suma de todos los elementos del array utilizando un método adecuado.
 * 10. Muestra por consola el array original, el array de números pares y la suma total.
 */
const operacionesArray = [Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa];
// Añadir un elemento al final del array 
operacionesArray.push("Lambda");
// Añadir un elemento al principio del array
operacionesArray.unshift("Alpha");
// Eliminar el último elemento del array
operacionesArray.pop();
// Eliminar el primer elemento del array
operacionesArray.shift();
// Eliminar un elemento en una posición específica del array
operacionesArray.splice(2, 1); // Elimina el elemento en la posición 2
// Invertir el orden de los elementos del array
operacionesArray.reverse();
// Ordenar el array en orden ascendente
for( i=0;i<operacionesArray.length;i++){
    for(j=i+1;j<operacionesArray.length;j++){
        if(operacionesArray[i]>operacionesArray[j]){
            let temp=operacionesArray[i];
            operacionesArray[i]=operacionesArray[j];
            operacionesArray[j]=temp;
        }
    }
}{

}