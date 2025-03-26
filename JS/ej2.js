/*
console.log(a)
var a = "hola" //undefined

console.log(b)
let b = "hola" //ReferenceError: Cannot access 'b' before initialization

console.log(c)
const c = "hola" //ReferenceError: Cannot access 'c' before initialization
*/

sayHi();

function sayHi() {
  console.log("Hi!");
} //Hi!

function sayBye() {
  console.log("Bye!");
} //No error

sayBye(); //Bye!

/*
Las variables var devuelven undefined si se ejecutan antes de darles un valor.
Las variables let y const devuelven un error si se ejecutan antes de darles un valor.
Las funciones declaradas con function se pueden ejecutar antes de declararlas y después de declararlas.
*/