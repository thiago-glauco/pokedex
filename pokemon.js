class Pokemon {
  name;
  number;
  type;
  move;
  image;
  dataUrl;

  constructor(name = '', number = '', type = '', move = '', image = '') {
    this.name = name;
    this.number = number;
    this.type = type;
    this.move = move;
    this.image = image;
  }

  set name(newName) {
    this.name = newName;
    return this;
  }

  get name() {
    return this.name;
  }

  set number(newNumber) {
    this.number = newNumber;
    return this;
  }

  get number() {
    return this.number;
  }

  get type() {
    return this.type;
  }

  set type(type) {
    this.type = type;
    return this;
  }

  set move(mv) {
    this.move = mv;
    return this;
  }

  get move() {
    return this.move;
  }

  get image() {
    return this.image;
  }

  set image(imgUrl) {
    this.image = imgUrl;
    return this;
  }

  get dataUrl() {
    return this.dataUrl;
  }

  set dataUrl(url) {
    this.dataUrl = url;
    return this;
  }
  
}

module.exports = Pokemon;
