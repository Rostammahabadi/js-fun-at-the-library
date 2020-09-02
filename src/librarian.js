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
  findBook( title ){
    for(const [key, value] of Object.entries(this.library.shelves)){
      if(searchShelf(value, title)){
        checkoutBook( this.library, title)
        return `Yes, we have ${title}`
      } else {
        return `Sorry, we do not have ${title}`
      }
    }
  }
  calculateLateFee(days){
    return Math.ceil((days * .25))
  }
}

module.exports = Librarian;
