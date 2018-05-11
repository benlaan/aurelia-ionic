import * as moment from "moment";

export type Mode = "TopRated" | "All";

export interface Book {

    id: number;
    title: string;
    author: string;
    genre: string;
    published: Date;
    pages: number;
    stars: number;
}

export class BookRepository {

    private books: Book[];

    constructor() {

        this.initialiseBooks();
    }

    private initialiseBooks(): void {

        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {

            this.books = JSON.parse(storedBooks);
            return;
        }

        this.books = [

            { id: 1, title: "Ionic Compounds", genre: "Chemistry", author: "Rock Saltier", published: moment("2015/04/03").toDate(), pages: 455, stars: 4, },
            { id: 2, title: "Aurelia For Beginners", genre: "Software", author: "Sol Golding", published: moment("2002/10/20").toDate(), pages: 1124, stars: 3.5 },
            { id: 3, title: "Angular with Ionic", genre: "Software", author: "Anonymous", published: moment("2015/01/12").toDate(), pages: 600, stars: 3 },
            { id: 4, title: "Advanced MVVM", genre: "Software", author: "Archie Techt", published: moment("2011/08/30").toDate(), pages: 275, stars: 2.5 }
        ];

        this.saveToLocalStorage();
    }

    private saveToLocalStorage() {

        localStorage.setItem("books", JSON.stringify(this.books));
    }

    public all(): Book[] {

        return this.books;
    }

    public save(book: Book): void {

        if (book.id) {

            var index = this.books.findIndex(b => b.id == book.id);
            this.books[index] = book;
        }
        else {

            this.books.push(book);
            var ids = this.books.map(b => b.id);
            book.id = Math.max(...ids) + 1;
        }

        this.saveToLocalStorage();
    }

    public delete(book: Book): void {

        if (book.id) {

            var index = this.books.findIndex(b => b.id == book.id);
            if (index > -1) {

                this.books.splice(index, 1);
                this.saveToLocalStorage();
            }
        }
    }
  
    public get(id: number): Book {

        return this.books.find(b => b.id == id);
    }
}
