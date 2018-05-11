import * as moment from 'moment';

export class DateFormatValueConverter {

    public toView(value: string, format?: string): string {

        if (!value)
            return null;

        return moment(value).format(format);
    }
}
