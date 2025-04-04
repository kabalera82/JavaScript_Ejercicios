
/**
 * Haz una función llamada "setCapitalUpper" que reciba un string y DEVUELVA el string
 * con la inicial en mayúscula.
 * 
 * Ejemplos de uso:
 * setCapitalUpper("hello"); // "Hello"
 * setCapitalUpper("hELLO"); // "Hello"
 * setCapitalUpper("HeLlO"); // "Hello"
 * setCapitalUpper("Hello"); // "Hello"
 */

// Tu respuesta aquí
//Creamos una función que reciba un string
function setCapitalUpper(str) {
    //Declaramos una variable que sea igual al primer caracter y lo convertimos en mayuscula 
    //const porque no vamos a cambiar el valor de la variable
    const firstUp = str.charAt(0).toUpperCase();
    //Por ultimo metodo slice para obtener el resto desde la posicion 1 hasta el final
    const Upper = str.slice(1).toLowerCase();
    //si no se recibe nada devolvemos un string vacio devolvemos cadena vacia
    if (!str) return "";
    //Devolvemos la dos constantes juntas.
    return (firstUp + Upper)
}
//Comprobamos resultado
console.log(setCapitalUpper("hello"));


/**
 * Haz una función "fizzbuzz" que reciba un número entero y, para cada número desde 1
 * hasta el número recibido MUESTRE POR PANTALLA lo siguiente:
 *  >> "fizz" si ese número es múltiplo de 3
 *  >> "buzz" si ese número es múltiplo de 5
 *  >> "fizzbuzz" si ese número es múltiplo de 3 y de 5 a la vez
 *  >> el mismo número si éste no es múltiplo ni de 3 ni de 5
 * 
 * Ejemplo de uso:
 * fizzbuzz(5); // 1 2 "fizz" 4 "buzz"
 */

// Tu respuesta aquí
//Declar
function FizzBuzz(num) {
    for (let i = 0; i < num; i++) {
        if ((i % 3 == 0 && i % 5 == 0)) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i)
        }
    }
}

FizzBuzz(10);





/**
 * Escribe una función "bmc" que reciba dos números enteros, "height" y "weight", 
 * calcule el índice de masa corporal y te devuelva alguna de los siguientes strings
 * según el caso:
 * 
 *  >> Si el índice es menor o igual que 18.5, devuelve "underweight"
 *  >> Si es menor o igual que 25, devuelve "normal"
 *  >> Si es menor o igual que 30, "overweight"
 *  >> Si es mayor de 30, "obese"
 * 
 * Ejemplo de uso:
 * bmc(186, 90); "overweight"
 */

// Tu respuesta aquí
//Creamos la funcion
function bmc(height, weight) {
    //creamos la variable con la logica de la formula de IMC
    const imc = weight / Math.pow(height / 100, 2)
    //Recorremos if else anidados para comprobar
    if (imc <= 18.5) return "your IMC is underweight";
    if (imc <= 25) return "your IMC is normal";
    if (imc <= 30) return "eat more vegetables";
    return "maybe you should go to the gym"
}
//Comprobamos la funcion que esté correcta
bmc(180, 90)




/**
 * Crea una función "max" que reciba 4 números enteros y devuelva el valor
 * del mayor de ellos. NO SE PUEDE USAR Math.max
 * 
 * Ejemplo de uso
 * max(10, 15, 100, 40,); // 100
 */
function max(numbers) {
    // Inicializar con el primer elemento del array
    let numMax = numbers[0];
    // i = 1 para comparar desde el segundo elemento
    for (let i = 1; i < numbers.length; i++) {
        //Comparamos numMax con el valor de la posicion de numbers
        if (numbers[i] > numMax) {
            // Actualizar el máximo si es necesario
            numMax = numbers[i];
        }
    }
    // Devolvemos el número máximo
    return numMax;
}

function max(n1, n2, n3, n4) {
    const numbers = [n1, n2, n3, n4];
    let greaterNumber = numbers[0];
    for (const number of numbers) {
        if (number > greaterNumber) {
            greaterNumebr = number;
        }
    }
    return greaterNumber;
}
//Array de numeros 
numbers = [10, 15, 100, 40];
console.log(max(numbers));

/*Crea una funcion anagrama que compruebe si las frases introducidas son anagramas o no*/
//Prueba de uso Clint Eastwood  Old West Action
function anagrama(str1, str2) {
    //toLowerCase convertimos la cadena a minusculas
    //split Dividimos la cadena en un arreglo de palabras, eliminando espacios
    //Unimos todo en una sola cadena sin espacios
    //Convertimos en una cadena de caracteres lo que permite usar el sort
    //Ordenamos alfabeticamente
    //Unimos en una nueva cade
    let anagram1 = str1.toLowerCase().split(" ").join("").split("").sort().join("");
    let anagram2 = str2.toLowerCase().split(" ").join("").split("").sort().join("");

    // Observamos los resultados procesados
    console.log(anagram1);
    console.log(anagram2);

    // Comparamos las cadenas procesadas y mostramos el resultado
    console.log(anagram1 === anagram2 ?
        `${str1} y ${str2} son anagramas.` :
        `${str1} y ${str2} no son anagramas.`);
}

// Prueba de uso
anagrama("Clint Eastwood", "Old West Action");
anagrama("Roma", "Amor");

/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function binario(num) {
    console.log("Ejecutando función binario con num =", num); // Mensaje para indicar que la función se está ejecutando
    let binario = ""; // Inicializamos una cadena vacía para almacenar el resultado binario

    if (num > 0) {
        // Caso para números positivos
        while (num != 0) {
            let residuo = num % 2; // Obtenemos el residuo de la división entre 2 (0 o 1)
            binario = residuo + binario; // Concatenamos el residuo al principio de la cadena
            num = Math.floor(num / 2); // Dividimos el número entre 2 y tomamos la parte entera
        }
        return binario || "0"; // Devolvemos el binario calculado o "0" si no hay resultado (aunque no debería ocurrir)
    } else if (num < 0) {
        // Caso para números negativos
        let bits = 8; // Número de bits para la representación binaria (puedes ajustarlo según sea necesario)
        let positivo = Math.abs(num); // Obtenemos el valor absoluto del número negativo

        // Convertimos el valor absoluto a binario
        while (positivo != 0) {
            let residuo = positivo % 2; // Obtenemos el residuo de la división entre 2
            binario = residuo + binario; // Concatenamos el residuo al principio de la cadena
            positivo = Math.floor(positivo / 2); // Dividimos el número entre 2 y tomamos la parte entera
        }

        // Aseguramos que el binario tenga el número correcto de bits
        binario = binario.padStart(bits, "0");
        console.log("Binario antes de complemento a uno:", binario); // Mostramos el binario antes de aplicar el complemento a uno

        // Calculamos el complemento a uno (invertimos los bits)
        let complementoUno = binario
            .split("") // Dividimos la cadena en un arreglo de caracteres
            .map(bit => (bit === "0" ? "1" : "0")) // Invertimos cada bit: 0 -> 1, 1 -> 0
            .join(""); // Unimos los bits invertidos en una nueva cadena
        console.log("Complemento a uno:", complementoUno); // Mostramos el complemento a uno

        // Calculamos el complemento a dos (sumamos 1 al complemento a uno)
        let complementoDos = (parseInt(complementoUno, 2) + 1) // Convertimos el complemento a uno a decimal, sumamos 1
            .toString(2) // Convertimos el resultado nuevamente a binario
            .padStart(bits, "0"); // Aseguramos que tenga el número correcto de bits
        console.log("Complemento a dos:", complementoDos); // Mostramos el complemento a dos

        return complementoDos; // Devolvemos el complemento a dos como resultado final
    } else {
        // Caso para el número 0
        return "0"; // El binario de 0 es simplemente "0"
    }
}

// Ejemplo de uso
console.log(binario(10));  // "1010" (binario de 10)
console.log(binario(-10)); // "11110110" (complemento a dos de -10 en 8 bits)
console.log(binario(0));   // "0" (binario de 0)

/*Fibonacci*/

function Fibonacci(num) {
    let n0 = 0; // Primer número de la secuencia
    let n1 = 1; // Segundo número de la secuencia
    let fib;

    for (let i = 0; i < num; i++) { // Iteramos 'num' veces
        console.log(n0); // Imprimimos el número actual
        fib = n0 + n1; // Calculamos el siguiente número de Fibonacci
        n0 = n1; // Actualizamos n0 al valor de n1
        n1 = fib; // Actualizamos n1 al valor de fib
    }
}

// Ejemplo de uso
Fibonacci(20); // Genera los primeros 10 números de la secuencia de Fibonacci
function Fibonacci(num) {
    let n0 = 0; // Primer número de la sucesión
    let n1 = 1; // Segundo número de la sucesión
    let fib;

    // Creamos un rango de números del 1 al num y usamos forEach
    Array.from({ length: num }, (_, i) => i).forEach(() => {
        console.log(n0); // Imprimimos el número actual
        fib = n0 + n1; // Calculamos el siguiente número de Fibonacci
        n0 = n1; // Actualizamos n0 al valor de n1
        n1 = fib; // Actualizamos n1 al valor de fib
    });
}

// Ejemplo de uso
Fibonacci(20); // Imprime los primeros 50 números de la sucesión de Fibonacci

/**/