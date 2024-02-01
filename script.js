document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', function() {
        const pokemonName = document.querySelector('input[type="text"]').value.trim().toLowerCase();
        if (pokemonName) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(response => {
                    displayPokemonInfo(response.data);
                })
                .catch(error => {
                    console.error("Error fetching Pokémon data:", error);
                    alert('Pokémon not found. Please try another name.');
                });
        } else {
            alert('Please enter a Pokémon name.');
        }
    });
});

function displayPokemonInfo(pokemon) {
    const pokemonNameDisplay = document.getElementById('pokemonName');
    const pokemonImageDisplay = document.getElementById('pokemonImage');

    pokemonNameDisplay.textContent = pokemon.name;
    pokemonImageDisplay.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`;
}