/*
 * Dame un ejemplo de cada tipo de objeto en JavaScript.
 * Object, Array, Function, Date, RegExp, Map, Set.
 */

//Objeto
let objetoDePrueba = {
    nombre: "KabaDev",
    edad: 42,
    habilidades: ["JavaScript", "Node.js", "React"],
    saludar: function() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años. Mis habilidades son: " + this.habilidades.join (", "));
    }
};

console.log(objetoDePrueba);
objetoDePrueba.saludar();

//Array
let array = ["JavaScript", "Node.js", "React"];
console.log(array);
console.log (array[0]);
console.log (array[1]);

//Function
function saludar(nombre){
    console.log("Hola, soy " + nombre);
}

saludar("KabaDev");

//Date
let fecha = new Date();
console.log(fecha);

//RegExp
let expresionRegular = /ab+c/;
let expresionRegular2 = new RegExp('ab+c');

console.log(expresionRegular);
console.log(expresionRegular2);

//Map

// Crear un nuevo Mapa (objeto)
let mapa = new Map();

//Añadimos pare clave-valor
mapa.set('nombre', 'KabaDev');
mapa.set('edad',42);
mapa.set('habilidades', ["JavaScript", "Node.js", "React"]);

// Obtener valores
console.log(mapa.get('nombre')); // "KabaDev"
console.log(mapa.get('edad')); // 42
console.log(mapa.get('habilidades')); // ["JavaScript", "Node.js", "React"]

/* Verificar si una clave existe

* Trabajamos sobre el objeto mapa

console.log(mapa.has('nombre')); // true
console.log(mapa.has('profesion')); // false

// Eliminar un par clave-valor
mapa.delete('edad');
console.log(mapa.has('edad')); // false

// Obtener el tamaño del Map
console.log(mapa.size); // 2

// Iterar sobre los pares clave-valor
mapa.forEach((valor, clave) => {
    console.log(clave + ': ' + valor);
});

// Limpiar el Map
mapa.clear();
console.log(mapa.size); // 0

*/

//Set

// Crear un nuevo Set (objeto)
let conjunto = new Set();

// Añadir elementos
conjunto.add('JavaScript');
conjunto.add('Node.js');
conjunto.add('React');

// Verificar si un elemento existe
console.log(conjunto.has('JavaScript')); // true
console.log(conjunto);
console.log(conjunto(Set))













