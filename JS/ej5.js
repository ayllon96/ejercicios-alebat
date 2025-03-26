const myMap = new Map()

const usuario1 = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro Man",
  salario: 1000,
  nacionalidad: "español"
}
const usuario2 = {
  nombre: "Eufrasio",
  apellido: "Gómez",
  edad: 35,
  profesion: "Encofrador",
  salario: 200,
  nacionalidad: "mauritano"
}

function findAnimal(){
  return "jabalí"
}

myMap.set("moroso", usuario1)
myMap.set("agarrado", usuario1)
myMap.set("generoso", usuario2)
myMap.set("funcion", findAnimal())
myMap.set("color", "cián")

//Imprimir mapa
console.log(myMap) //Devuelve el mapa
console.log(myMap.get("moroso")) //Devuelve el valor de la clave
console.log(myMap.has("hola")) //Comprueba si existe una clave por su nombre
console.log(myMap.size) //Devuelve el tamaño del mapa

myMap.forEach((value, key) => {
  console.log(key, value)
} ) //Recorre el mapa y devuelve clave y valor

myMap.delete("agarrado") //Borra agarrado del mapa
myMap.clear() //Borra todo el mapa
console.log(myMap) //Devuelve un mapa vacío