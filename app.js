// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '34524'
            }, 
            {
                title: 'Book Two',
                author: 'Jane Smith',
                isbn: '24098'
            }
        ];

        const books = storedBooks;

        books.forEach((book) => {
            UI.addBookToList(book);
        })
    }
    //function to add book
     static addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML= `<td>${book.title} </td>
                        <td>${book.author} </td>
                        <td>${book.isbn} </td>
                        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                                            `;

        list.appendChild(row);

    }

    //function to clear the form fields
    static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
 
   }

   //function to delete book
   static deleteBook(event) {
        if(event.classList.contains('delete')) {
            event.parentElement.parentElement.remove();
        }
   }



}

//Store Class

//Event to Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event to Add a Book

//get submit element
const submit = document.querySelector('.btn-block');

//add book
submit.addEventListener('click', addBook);

//function to add book
function addBook() {
    //get the values of each field
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    //create a new book object
    const    book = new Book(title, author, isbn);

    //call the method to add the book
    UI.addBookToList(book);

    //clear the form fields
    UI.clearFields();

  
}



//Event to remove a Book
const bookList = document.getElementById("book-list");
bookList.addEventListener('click', event => {
    UI.deleteBook(event.target);
})
