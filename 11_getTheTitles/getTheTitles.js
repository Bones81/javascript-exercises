const getTheTitles = function(books) {
    return books.map( (bookObj) => bookObj.title)
};

const titles = getTheTitles([
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
]);

console.log(titles);
// Do not edit below this line
module.exports = getTheTitles;
