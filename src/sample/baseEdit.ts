import { bindable } from "aurelia-templating";
import * as _ from "lodash";

export abstract class BaseEdit {

    @bindable
    public original: any;

    constructor() {

    }

    public get readOnly(): boolean {

        return false;
    }

    public abstract get data(): boolean;

    // lifted from https://stackoverflow.com/questions/31683075/how-to-do-a-deep-comparison-between-2-objects-with-lodash
    private objectsDiffer(obj1: any, obj2: any): any[] {

        var differences = Object
            .keys(obj1)
            .reduce((result, key) => {

                    if (!obj2.hasOwnProperty(key)) {
                        result.push(key);
                    }
                    else if (_.isEqual(obj1[key], obj2[key])) {

                        var index = result.indexOf(key);
                        result.splice(index, 1);
                    }

                    return result;
                },
                Object.keys(obj2)
            );

        return differences;
    }

    public get isDirty(): boolean {

        if (this.readOnly)
            return false;

        if (!this.data || !this.original)
            return false;

        var diffs = this.objectsDiffer(this.data, this.original);
        return diffs.length > 0;
    }

    public save(close?: boolean): boolean {

        return this.isDirty;
    }

    public cancel(): boolean {

        return !this.isDirty || confirm("There are pending changes. Are you sure?");
    }
}
