var gBooksNames = ['spiderman', 'harry potter', 'games of thrones']
var gPrices = [50, 80, 100]
var gImgs = ['spiderman.jpg', 'harry-potter.jpg', 'games-of-thrones.jpg']
var gId = 100
var gBooks;
function init() {
    gBooks = createBooks()
    renderBooks()

}
function createBook(name, price, url) {
    if (!url) url = 'book.png'
    var book = {
        id: gId++,
        name: name,
        price: price,
        imgUrl: url
    }
    return book
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
    name = prompt('enter the name of the book')
    price = +prompt('enter the price of the book')

    gBooks.push(createBook(name, price))
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage('books', gBooks)
}
function updateBook(bookId) {
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

