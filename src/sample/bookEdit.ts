import { autoinject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

import { BaseEdit } from './baseEdit';
import { Book, BookRepository } from './bookRepository';

@autoinject()
export class SubmissionEdit extends BaseEdit {

    private id?: number;

    public book: Book;

    constructor(
        private repository: BookRepository,
        private router: Router
    ) {

        super();
        this.id = null;

        document.addEventListener("backbutton", e => this.save(true), false);
        window.onbeforeunload = e => this.save();
    }

    public get data(): any {

        return this.book;
    }

    public activate(params: { id: number, name: string }): void {

        this.id = params.id || 0;

        if (this.id == 0) {

            this.initialise(this.createNewBook());
        }
        else {

            var book = this.repository.get(this.id);
            this.initialise(book);
        }
    }

    private createNewBook(): Book {

        return {
            id: 0,
            published: new Date(),
            title: "",
            author: "",
            genre: "",
            pages: 0,
            stars: 0
        };
    }

    private initialise(book: Book) {

        this.book = book;
        this.original = Object.assign({}, book);

        // workaround for isDirty checking due to input[type=number].value being a string
        this.original.pages = (this.original.pages || "").toString(); 
        this.original.stars = (this.original.stars || "").toString();
    }

    private navigateToBooks() {

        this.router.navigateToRoute("book-all", { mode: "All" });
    }

    public get readonly(): boolean {

        return false;
    }

    public save(close?: boolean) : boolean {

        if (close && this.isNew && this.cancel()) {

            this.navigateToBooks();
            return false;
        }

        if (!super.save(close)) {

            this.navigateToBooks();
            return false;
        }

        this.repository.save(this.book);

        if (close)
            this.navigateToBooks();
        else
            this.initialise(this.book);

        return true;
    }

    public get isNew(): boolean {

        return this.book && this.book.id == 0;
    }

    public delete() : void {

        if (!this.readonly && !confirm("Are you sure you want to delete this book?"))
            return;

        this.repository.delete(this.book);
        this.navigateToBooks();
    }
}
