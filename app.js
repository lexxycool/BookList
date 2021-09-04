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

}

//Store Class

//Event to Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
//Event to Add a Book

//Event to remove a Book