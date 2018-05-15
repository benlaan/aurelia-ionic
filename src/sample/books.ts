import { autoinject, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import { Mode, Book, BookRepository } from './bookRepository';
import { App } from 'app';

@autoinject
export class BookList {

    @bindable
    private mode: Mode;

    public books: Book[];

    constructor(private app: App, private router: Router, private repository: BookRepository) {
    }

    public activate(params: { mode: Mode }): void {

        this.mode = params.mode || "TopRated";
        this.refresh();
    }

    public add(): void {

        this.router.navigateToRoute("book-new");
    }

    public refresh(): void {

        this.app.startLoading();

        var filter: ((Book) => boolean) = b => true;

        switch (this.mode) {

            case "TopRated":
                filter = (b: Book) => b.stars >= 4;
                break;
        }

        this.books = this.repository.all().filter(filter);

        setInterval(() => this.app.finishedLoading(), 3000);
    }

    public switchTab(mode: Mode): void {

        if (this.mode != mode)
            this.activate({ mode });
    }

    public viewBook(book: Book): void {

        this.router.navigateToRoute("book-edit", { id: book.id });
    }
}
