/*
 * Genera una serie de variables number
 *
 * y muestra por consola si son pares o impares mediante un boolean.
 */


for (let number = 1; number <= 50; number++){
    let par = number % 2 === 0;
    console.log(number + " es PAR: " + par)
}
