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

function checkoutBook(library, bookTitle){
  if(library.shelves.fantasy.map(book => book.title).includes(bookTitle)){
    var indexOf = library.shelves.fantasy.indexOf(book=> book.title === bookTitle)
    var updatedLibrary = library.shelves.fantasy.splice(indexOf, 1)
    return `You have now checked out ${bookTitle} from the ${library.name}`
  } else if (library.shelves.nonFiction.map(book => book.title).includes(bookTitle)){
    var indexOf = library.shelves.nonFiction.indexOf( book => book.title === bookTitle)
    library.shelves.nonFiction.splice(indexOf, 1)
    return `You have now checked out ${bookTitle} from the ${library.name}`
  } else if (library.shelves.fiction.map(book => book.title).includes(bookTitle)){
    var indexOf = library.shelves.fiction.indexOf(book => book.title === bookTitle)
    var updatedLibrary = library.shelves.fiction.splice(indexOf, 1)
    return `You have now checked out ${bookTitle} from the ${library.name}`
  }else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
