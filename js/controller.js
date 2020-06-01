
function renderBooks() {
    var elTable = document.querySelector('tbody')

    var books = getBooksForDisplay()
    var str = books.map(function (book) {
        return `<tr>
        <td> ${book.id} </td>
        <td> ${book.name} </td>
        <td> ${book.price} $ </td>
        <td> <img src=" ${book.imgUrl}"></td>
        <td> <button onclick="onShowDetails(${book.id})"> read</button>
            <button onclick="onUpdateBook(${book.id})"> update</button>
            <button onclick="onRemoveBook(${book.id})"> delete</button></td>
        </tr> `
    })
    elTable.innerHTML = str
}
function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}
function onAddBook() {
    addBook()
    renderBooks()
}
function onUpdateBook(bookId) {
    updateBook(bookId)
    renderBooks()
}

function onShowDetails(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h5').innerText = ' name of the book : ' + book.name
    elModal.querySelector('h6').innerText = ' the price : ' + book.price 
    elModal.querySelector('p').innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aut nihil temporibus quasi vero consectetur dolor maiores fuga optio placeat quis illum, error saepe voluptates ea deserunt iure voluptas dolorum.'
    elModal.style.display = 'block'

}
function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}
function onUpdateRate(diff) {
    var elRate = document.querySelector('.rate')
    var num = parseInt(elRate.innerText)
    if (num === 10 && diff === 1 || num === 0 && diff === -1)  return
        num += diff
    elRate.innerText = num
}