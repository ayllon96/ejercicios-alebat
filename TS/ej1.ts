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

type Cat = Pick<Animal, "name" | "canSleep"> & { color: string };

type Snake = Omit<Animal, "name">;

type dogRace = "Husky" | "Labrador" | "Chucho";

const firstBird: Bird = {
  name: "Piolin",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const firstDog: Dog = {
  name: "Firuláis",
  canEat: true,
  canDrink: true,
  canSleep: true,
  race: "Labrador",
  age: 3,
};

const firstCat: Cat = {
  name: "Calcetines",
  canSleep: true,
  color: "Naranja",
};

const firstSnake: Snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};
