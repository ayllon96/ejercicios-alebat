async function obtenerPokemons() {
  try {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}

obtenerPokemons();