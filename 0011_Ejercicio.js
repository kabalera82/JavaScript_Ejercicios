/*
 *
 * Diseña un programa que indique si podemos salir a la calle, tener en cuenta
 * si está lloviendo y si hemos terminado nuestras tareas.
 */
let lloviendo = false;
let tareasTerminadas = true;
let salir = !lloviendo && tareasTerminadas;

console.log("Niño: ¿Podemos salir a la calle?");
console.log("Adulto:¿has terminado tus tareas?");
console.log("Niño: " + tareasTerminadas);
console.log("Adulto: ¿Está lloviendo?");
console.log("Niño: " + lloviendo);
console.log("Niño: ¿Podemos salir a la calle?");
console.log("Adulto: " + salir);
