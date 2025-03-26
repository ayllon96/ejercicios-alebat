//Booleanos
console.log(false + false) //Devuelve 0
console.log(false + true) //Devuelve 1
console.log(true + true) //Devuelve 2

//Arrays
//console.log([] === []); //Devuelve false. Los arrays son objetos y los objetos se comparan por referencia.
console.log([] + []); //No devuelve nada. Devuelve un string vacío.
console.log([1,2] + [3,4]); //Devuelve "1,23,4". Convierte los arrays a strings y los concatena.
console.log([1] + 1) //Devuelve "11". Convierte el array a string y lo concatena con el número.
console.log([1] - 1) //Devuelve 0. Convierte el array a número y lo resta con el número.

//Objetos
console.log({} + {}) //Devuelve "[object Object][object Object]". Convierte los objetos a strings y los concatena.
//console.log({} === {}) //Devuelve false. Los objetos se comparan por referencia.
console.log([] + {}) //Devuelve "[object Object]". Convierte el array a string y lo concatena con el objeto.

//Comparaciones especiales
console.log(null + 1) //Devuelve 1. Convierte null a 0 y lo suma con el número.
console.log(undefined + 1); //Devuelve NaN. Convierte undefined a NaN y lo suma con el número.
console.log(null == 0); //Devuelve false. null es un valor primitivo y 0 es un número.
console.log(null <= 0); //Devuelve true. null se convierte a 0.
console.log(undefined == null); //Devuelve true. Ambos son valores primitivos.

// Operaciones con NaN
console.log(NaN + 1); //Devuelve NaN. No se puede sumar NaN con un número.
console.log(NaN == NaN); //Devuelve false. NaN no es igual a NaN.
console.log(NaN === NaN); //Devuelve false.