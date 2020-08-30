function createTitle(title) {
  return "The " + title
}

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return ghoulCharacter
}

function saveReview(review, array) {
  if(!array.includes(review)){
    array.push(review)
  }
}

function calculatePageCount(title){
  var split = title.split("")
  var total = 0
  split.forEach(element => total+= 20)
  return total
}

function writeBook(title, character, type){
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: type
  }
  return book
}

function editBook(book){
  book.pageCount = ((book.pageCount *3)/4)
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
