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

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event){showDetails(pokemon.name);})
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
