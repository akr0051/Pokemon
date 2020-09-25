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
  }
];

for (i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (type: " + pokemonList[i].type + ")" + " (height " + pokemonList[i].height + ")" + "<br>");
    if (pokemonList[i].height > 1) {
      document.write(" --- Wow, that's big!")
    }
  }
