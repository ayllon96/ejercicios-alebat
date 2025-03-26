/*
Ej1.
Con type se podría hacer lo mismo pero en este caso, para aprovechar la herencia 
es mejor usar interfaces por su semántica
*/
interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

interface Bird extends Animal {
  canFly: boolean;
}

interface Dog extends Animal {
  race: dogRace;
  age: number;
}

//Creamos una interfaz independiente porque no comparte propiedades con las anteriores.
interface Cat {
  name: string;
  color: string;
  canSleep: boolean;
}

type dogRace = "Husky" | "Labrador" | "Chucho";

const pajaro: Bird = {
  name: "Piolin",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const perro: Dog = {
  name: "Firuláis",
  canEat: true,
  canDrink: true,
  canSleep: true,
  race: "Labrador", //Si no se pone una raza válida, dará error
  age: 3,
};

const gato: Cat = {
  name: "Garfield",
  canSleep: true,
  color: "Naranja", //Si se pone una propiedad que no está en la interfaz, dará error
};
