import data from '../data.js';
import dom from '../dom.js';
import getPokemon from '../../apis/getPokemon.js';
import createPokemon from '../components/createPokemon.js';

const pokemonHandler = async () => {
    const id = dom.input.value;

    // check if id is already in use
    if (data.previousId === id) {
        dom.input.value = '';
        return;
    }

    data.previousId = id;

    // check if input is correct
    if (id < 1 || isNaN(id)) {
        dom.root.innerHTML = '';
        dom.input.value = '';

        const text = document.createElement('p');
        text.classList = 'warning';
        text.innerText = "Pokemon id can't be text or less then 1";

        return dom.root.append(text);
    }

    // create container
    try {
        const pokemon = await getPokemon(id);
        let pokemonDom;

        const pokemonElementExists =
            document.getElementById(pokemonDom) !== null;

        if (!pokemonElementExists) {
            dom.root.innerHTML = '';
        }

        pokemonDom = createPokemon(pokemon);
        dom.root.append(pokemonDom);
        dom.input.value = '';
    } catch (err) {
        console.error(err);
    }
};

export default pokemonHandler;
