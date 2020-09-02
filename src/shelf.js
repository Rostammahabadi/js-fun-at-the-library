function shelfBook(book, shelf){
  if(shelf.length != 3){
    shelf.unshift(book)
  }
}

function unshelfBook(title, shelf){
  var index = shelf.map(shelf=> shelf.title).indexOf(title)
  shelf.splice(index, 1)
}

function listTitles(shelf){
  return shelf.map(shelf=>shelf.title).join(", ")
}

function searchShelf(shelf, title){
  var index = shelf.map(shelf=> shelf.title)
  return index.includes(title)
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
