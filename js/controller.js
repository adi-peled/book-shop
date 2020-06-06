
function renderBooks() {
    var elTable = document.querySelector('tbody')
    // var books = getBooksForDisplay()
    var books = getBooks()
    var strHtml = books.map(function (book) {
        return `<tr>
        <td> ${book.id} </td>
        <td> ${book.name} </td>
        <td  class="price"  > ${onCalcILS(book.price)} </td>
        <td> <img src=" ${book.imgUrl}"></td>
        <td> <button  data-trans="read"  onclick="onShowDetails('${book.id}')"  > read</button>
            <button data-trans="update" onclick="onUpdateBook('${book.id}')"> update</button>
            <button   data-trans="delete" onclick="onRemoveBook('${book.id}')"> delete</button></td>
        </tr> `
    })

    elTable.innerHTML = strHtml.join('')
    doTrans()
}

function onNextPage() {
    nextPage();
    renderBooks();
}
function onPrevPage() {
    prevPage();
    renderBooks();
}
function onRemoveBook(bookId) {
    removeBook(bookId)

    renderBooks()

}
function onAddBook() {
    var inputName = document.querySelector('.new-name').value
    var inputPrice = document.querySelector('.new-price').value
    addBook(inputName, inputPrice)
    document.querySelector('.new-name').value = ''
    document.querySelector('.new-price').value = ''
    renderBooks()
}
function onUpdateBook(bookId) {
    updateBook(bookId)
    if (gIsUpdate) {
        renderBooks()
    }
    gIsUpdate = true
}

function onShowDetails(bookId) {
    var lorem = '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aut nihil temporibus quasi vero consectetur dolor maiores fuga optio placeat quis illum, error saepe voluptates ea deserunt iure voluptas dolorum.'
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    var h5 = elModal.querySelector('h5')
    var h6 = elModal.querySelector('h6')
    var txt = elModal.querySelector('p')
    h5.innerHTML = `<h5 data-trans="title-2">  name of the book  :     </h5>  <h5> ${book.name} </h5> `
    h6.innerHTML = `<h6 data-trans="title-price">  price:      </h6>  <h6>   ${book.price}       </h6>  `
    txt.innerHTML = ` <p data-trans="txt">  ${lorem}      </p>`
    elModal.style.display = 'block'
    renderBooks()

}
function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}
function onUpdateRate(diff) {
    var elRate = document.querySelector('.rate')
    var num = parseInt(elRate.innerText)
    if (num === 10 && diff === 1 || num === 0 && diff === -1) return
    num += diff
    elRate.innerText = num
}

function onSetLang(lang) {
    setLang(lang)
    renderBooks();
    // if lang is hebrew add RTL class to document.body
    if (lang === 'he') document.body.classList.add('rtl');
    else document.body.classList.remove('rtl');
    doTrans();

}




function onCalcILS(num) {
    currLang = getCurrLang()
    if (currLang === 'he') {
        return calcILS(num) + '₪'
    } else return num + '$'

}



function onSortByName() {

    sortByName()




}

function onSortByPrice() {

    sortByPrice()

}