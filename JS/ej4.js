/*
He pensado que en vez de crear tres usuarios con distintos atributos, era más eficiente 
crear una clase Usuario con los atributos que tienen en común y luego crear los usuarios 
con esos atributos.
*/
class Usuario { 
  constructor(nombre, apellido, edad, profesion, salario, nacionalidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;
    this.salario = salario;
    this.nacionalidad = nacionalidad;
  }

  nombreCompleto() {
    return `Me llamo ${this.nombre} ${this.apellido}`;
  }

  salarioAnual() {
    return `Cobro ${this.salario * 12}€ al año`;
  }

  isEspanolyViejo(){
    if (this.edad != 30 && this.nacionalidad !== "español") {
      return "No apto para ayuda del gobierno";
    } else {
      return "Apto para ayuda del gobierno";
    }
  }
}

const usuario1 = new Usuario("Eufrasio", "Gómez", 35, "encofrador", 2000, "mauritano");
const usuario2 = new Usuario("Pedro", "Sánchez", 45, "Barro man", 1000, "español");
console.log(usuario1.nombreCompleto());
console.log(usuario1.salarioAnual());
console.log(usuario1.isEspanolyViejo());
console.log(usuario2.nombreCompleto());
console.log(usuario2.salarioAnual());
console.log(usuario2.isEspanolyViejo());