const createPokemon = (pokemonData) => {
    const container = document.createElement('div');
    container.classList = 'container';

    const title = document.createElement('h2');
    title.innerText = pokemonData.name;

    const img = document.createElement('img');
    img.src = pokemonData.sprites.front_default;

    const abilities = document.createElement('div');
    const abilTitle = document.createElement('h3');
    abilTitle.innerHTML = 'Abilities:';
    abilities.append(abilTitle);

    pokemonData.abilities.forEach((abilityName) => {
        const ability = document.createElement('p');
        ability.innerText = abilityName.ability.name;

        abilities.append(ability);
    });

    container.append(title, img, abilities);

    return container;
};

export default createPokemon;
