var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(person, morning){
    if(morning===true){
      return `Good morning, ${person}!`
    } else{
      return `Hello, ${person}!`}
  }
}

module.exports = Librarian;
