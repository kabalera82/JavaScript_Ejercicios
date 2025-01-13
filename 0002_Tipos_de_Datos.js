/* Tipos de datos en JavaScript */
//Number

let numeroEntero = 50;
let numeroDecimal = 50.5;

console.log(numeroEntero); // 50
console.log(numeroDecimal); // 50.5

//String
let cadenaDeTexto = "Hola Mundo!";

console.log(cadenaDeTexto); // Hola Mundo!

//Boolean
let verdadero = true;
let falso = false;

console.log(verdadero); // true
console.log(falso); // false

//Undefined
/*
 * Undefined es un valor primitivo que se asigna automáticamente a las variables
 * que se declaran pero no se inicializan con un valor.
 */
let indefinido;

console.log(indefinido); // undefined

//Null
/*
 * Null es un valor primitivo que se asigna a una variable para indicar que no tiene valor.
 * Es un valor especial que indica la ausencia de un valor.
 */
let nulo = null;

console.log(nulo); // null

//BigInt
let numeroGrande = 1234567890123456789012345678901234567890n;

console.log(numeroGrande); // 1234567890123456789012345678901234567890n


//Symbol
let simbolo = Symbol("descripcion");
/*
 * Únicos: Cada Symbol es único. Incluso si dos Symbol tienen la misma descripción, no son iguales.
 * Inmutables: Una vez creado, el valor de un Symbol no puede cambiar.
 * No enumerables: Las propiedades de un objeto que usan Symbol como clave no aparecen en los bucles for...in o Object.keys.
 */
let simbolo1 = Symbol('5');
let simbolo2 = Symbol('5');


let objeto = {
  [simbolo]: "valor asociado al simbolo",
};


console.log(objeto); // { [Symbol(descripcion)]: 'valor asociado al simbolo' }
console.log(simbolo); // Symbol(descripcion)
console.log(objeto[simbolo]); // "valor asociado al simbolo"
console.log(simbolo1 === simbolo2); // false

//Object
/*
 * Un objeto es una colección de propiedades, donde cada propiedad es una clave (key)
 * asociada a un valor (value). Las claves son cadenas de texto (o Symbol),
 * y los valores pueden ser de cualquier tipo de datos.
 */

let objetoVacio = {};
let objetoConPropiedades = {
  nombre: "KabaDev",
  edad: 42,
};

console.log(objetoVacio); // {}
console.log(objetoConPropiedades); // { nombre: 'KabaDev', edad: 42 }
console.log (objetoConPropiedades.nombre, objetoConPropiedades.edad); // KabaDev 42 


//Array
/*
 * Un array es un objeto que almacena una colección de elementos, donde cada elemento
 * se identifica por un índice. Los índices de los elementos comienzan en 0.
 */
let arrayVacio = [];
let arrayConElementos = [1, 2, 3, 4, 5];

console.log(arrayVacio);
console.log(arrayConElementos);

//Date
/*
 * El objeto Date es un objeto que permite trabajar con fechas y horas en JavaScript.
 * Se puede crear un objeto Date con la fecha y hora actuales, o con una fecha y hora específicas.
 */
let fecha = new Date();

console.log(fecha);

//RegExp
/*
 * Las expresiones regulares son patrones utilizados para hacer coincidir
 * combinaciones de caracteres en cadenas de texto.
 */
let expresionRegular = /ab+c/;
let expresionRegular2 = new RegExp('ab+c');

console.log(expresionRegular); // /ab+c/
console.log(expresionRegular2); // /ab+c/
console.log(expresionRegular === expresionRegular2); // false

let texto1 = "abbbc";
let texto2 = "abc";
console.log(expresionRegular===texto2); // false
console.log(typeof expresionRegular); // object
console.log(typeof texto2); // string
console.log(expresionRegular.test(texto1)); // true, coincide con "abbbc"
console.log(expresionRegular.test(texto2)); // true, coincide con "abc"

console.log(expresionRegular2.test(texto1)); // true, coincide con "abbbc"
console.log(expresionRegular2.test(texto2)); // true, coincide con "abc"