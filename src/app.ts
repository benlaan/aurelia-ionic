import { Aurelia, bindable } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {

    public router: Router;

    @bindable
    public loading: boolean;

    @bindable
    public error: any;

    constructor() {

        this.loading = false;
    }

    public startLoading(): void {

        this.error = null;
        this.loading = true;
    }

    public finishedLoading(error?: { statusCode: number, statusText: string }): void {

        this.error = null;
        this.loading = false;

        if (error) {

            if (typeof error == "string")
                this.error = error;
            else
                this.error = error.statusCode != 0 ? `${error.statusCode}: ${error.statusText || 'Error'}` : "Internal Server Error";

            console.log(error);
        }
    }
 
    public configureRouter(config: RouterConfiguration, router: Router) {

        config.title = 'Aurelia (Ionic)';

        config.map([
            {
                route: ['', 'books'],
                name: 'book-all',
                title: "books",
                moduleId: 'sample/books'
            },
            {
                route: 'book/edit/:id',
                name: 'book-edit',
                title: "Edit Book",
                moduleId: 'sample/bookEdit'
            },
            {
                route: 'book/new',
                name: 'book-new',
                title: "New",
                moduleId: 'sample/bookEdit'
            },
        ]);

        this.router = router;
    }
}
