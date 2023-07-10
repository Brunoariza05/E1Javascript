let par = 6; // EJERCICIO 1 //

if (par % 2 === 0){
    console.log("el numero " + par + " es par");
} else {
    console.log("el numero " + par + " es impar");
}

console.log("-------------------------------");

let numeros2 = [5, 7]; // EJERCICIO 2 //

if (numeros2[0] > numeros2[1]){
    console.log("el numero " + numeros2[0] + " es mayor a " + numeros2[1]);
} else if (numeros2[0] < numeros2[1]){
    console.log("el numero " + numeros2[0] + " es menor a " + numeros2[1]);
} else {
    console.log("los numeros " + numeros2[0] + " y "+  numeros2[1] + " son iguales");
}

console.log("-------------------------------");

let numero3 = 16; // EJERCICIO 3 //

if (numero3 % 5 === 0){
    console.log("el numero " + numero3 + " es multiplo de 5");
} else {
    console.log("el numero " + numero3 + " no es multiplo de 5");
}

console.log("-------------------------------");

let numero4 = 6; // EJERCICIO 4//
let numero0 = 0;

for (numero0 = 0; numero4 >= numero0; numero0 ++){
    console.log(numero0);
}

console.log("-------------------------------");

let palabra = "hola"; // EJERCICIO 5 //
let numero5 = 5;
let contador = 0;

while (contador < numero5) {
    console.log(palabra);
    contador++;
};

console.log("-------------------------------");

let animales = ["perro", "gato", "pez"];  // EJERCICIO 6 //
function array(animales){
    console.log(animales);
}
array(animales);

console.log("-------------------------------");

let conjuntonum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // EJERCICIO 7 //
let i = 0;

for (i = 0; i <= conjuntonum [9]; i++ ){
    if (i !== 4){
        console.log(i);
    }
}

console.log("-------------------------------");

let arrays = [0, 1, 2, 3, 4]; // EJERCICIO 8 //
let multiplicar = 5;
for (arrays[0] = 0; arrays[0] < arrays.length; arrays[0]++){
    console.log(arrays[0] * multiplicar);
}

console.log("-------------------------------");