function createLibrary(name){
  var library = {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}
function addBook(library, book){
  if( book.genre === 'fantasy'){
    library.shelves.fantasy.push(book)
  } else if( book.genre === 'nonFiction'){
    library.shelves.nonFiction.push(book)
  } else {
    library.shelves.fiction.push(book)
  }
}

function checkoutBook(library, title){
  if(library.shelves.fantasy.includes(book => book.title === title)){
    library.shelves.fantasy.
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
