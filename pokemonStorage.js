import Pokemon from './pokemon';

class PokemonStorage {
  storage = [];

  constructor(initialSet = []) {
    this.storage = initialSet;
  }

  add(pokemon) {
    if (pokemon instanceof Pokemon) {
      this.storage.push(pokemon);
    }
  }

  get storage() {
    return this.storage;
  }
}

module.exports = PokemonStorage;
