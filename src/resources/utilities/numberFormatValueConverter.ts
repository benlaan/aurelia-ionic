export class NumberFormatValueConverter {

    public fromView(value: string, format?: string): number {

        if (!value)
            return null;

        return parseFloat(value);
    }
}