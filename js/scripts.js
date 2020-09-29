let pokemonRepository = (function (){
  let pokemonList = [
    {
      name: "Bulbasar",
      type: ["grass", "poison"],
      height: 0.7
    },
    {
      name: "Squirtle",
      type: "water",
      height: 0.5
    },
    {
      name: "Charizard",
      type: ["fire", "water"],
      height: 1.7
    },
    {
      name: "Diglet",
      type: "ground",
      height: .2
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " (type: " + pokemon.type + ")" + " (height " + pokemon.height + ")" + "<br>");
});
