// Import stylesheets
import './normalize.css';
import './style.css';
import Pokemon from './pokemon';
import PokemonStorage from './pokemonStorage';

let storage = new PokemonStorage();
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Pokedex</h1>`;

let pokeList = document.getElementById('pokeList');

let queryUrl = `https://pokeapi.co/api/v2/pokemon/?ofset=5000&limit=5000`;

initialLoad();

function initialLoad() {
  fetch(queryUrl)
    .then((res) => {
      return res.json();
    })
    .then((pokemons) => {
      //console.log(pokemons.results);
      pokemons.results.forEach((el) => {
        //console.log( el.url.split('/')[6] );
        let p = new Pokemon();
        p.name = el.name;
        p.dataUrl = el.url;
        p.number = el.url.split('/')[6];
        storage.add(p);
      });
      console.log(storage);
      return storage;
    })
    .then((s) => {
      console.log(s.storage[0]);
      return Promise.all([
        loadPokemonDetails(s.storage[0]),
        loadPokemonDetails(s.storage[1]),
        loadPokemonDetails(s.storage[2]),
        loadPokemonDetails(s.storage[3]),
        loadPokemonDetails(s.storage[4]),
        loadPokemonDetails(s.storage[5]),
      ]);
    })
    .then((r) => {
      console.log(storage);
      for (let i = 0; i < 6; i++) {
        pokeList.innerHTML += renderPokemon(storage.storage[i]);
      }
    })
    .catch((err) => console.log(err));
}

function loadPokemonDetails(pokemon) {
  console.log(pokemon);
  return new Promise((resolve, reject) => {
    fetch(pokemon.dataUrl)
      .then((res) => {
        return res.json();
      })
      .then((details) => {
        console.log(details.sprites.other);
        pokemon.image = details.sprites.other.home.front_default;
        pokemon.type = details.types[0].type.name;
        resolve(details);
      })
      .catch((err) => reject(err));
  });
}

function renderPokemon(pokemon) {
  return `
  <li>
  <header>
    <span class="badge name">${pokemon.name}</span>
    <!--<span class="badge number">#${pokemon.number}</span>-->
  </header>
  <article>
    <p>
      <span class="badge">${pokemon.type}</span>
      <span class="badge">move</span>
    </p>
    <img
      src="${pokemon.image}"
      alt="poke image"
    />
  </article>
</li>
  `;
}
