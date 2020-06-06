var gBooksNames = ['spiderman', 'harry potter', 'games of thrones']
var gPrices = [50, 80, 100]
var gImgs = ['spiderman.jpg', 'harry-potter.jpg', 'games-of-thrones.jpg']
const PAGE_SIZE = 5
var gPageIdx = 0;
var gBooks;
var gIsUpdate = false
function init() {
    gBooks = createBooks()
    renderBooks()
}


function getBooks() {
    var startIdx = gPageIdx * PAGE_SIZE;
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
}







function createBook(name, price, url) {
    if (!url) url = 'book.png'
    var book = {
        id: makeId(),
        name: name,
        price: price,
        imgUrl: url
    }
    return book
}
function nextPage() {
    if ((gPageIdx + 1) * PAGE_SIZE >= gBooks.length) gPageIdx = 0;
    else gPageIdx++;
}
function prevPage() {
    if (!gPageIdx) return
    gPageIdx--;
}
function getBooksForDisplay() {
    return gBooks
}

function createBooks() {
    var books = loadFromStorage('books')
    if (!books || !books.length) {
        var books = []
        for (var i = 0; i < 3; i++) {
            var book = createBook(gBooksNames[i], gPrices[i], gImgs[i])
            books.push(book)
        }
        saveToStorage('books', books)
    }
    return books
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();

}

function addBook(name, price) {

    

    gBooks.push(createBook(name, price))
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage('books', gBooks)
}
function updateBook(bookId) {

    // var bookIdx = gBooks.findIndex(function (book) {
    //     return bookId === book.id
    // })
    // var elPrices = document.querySelectorAll('.price')
    // var currPrice = elPrices[bookIdx]
    // currPrice.innerHTML = `<td class="price"  ><input type="number"></td> `

    // gBooks[bookIdx].price = currPrice.innerText
    // console.log(currPrice)
    //      console.log(gBooks[bookIdx].price, currPrice.innerText)
    // _saveBooksToStorage('books', gBooks)

    updatedPrice = +prompt('enter update price')
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks[bookIdx].price = updatedPrice
    _saveBooksToStorage('books', gBooks)




}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book
}


function makeId() {
    return Math.random().toString(36).substr(2, 9);
};


function calcILS(price) {
    return price * 3.5
}



function getCurrLang() {
    return gCurrLang
}



function sortByName() {

    gBooks.sort((book1, book2) => (book1.name > book2.name) ? 1 : -1)
    renderBooks()
}

function sortByPrice() {

    gBooks.sort((book1, book2) => (book1.price > book2.price) ? 1 : -1)
    renderBooks()
    // numArray = numArray.sort((a, b) => a - b);


}