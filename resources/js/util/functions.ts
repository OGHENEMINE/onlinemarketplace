/* eslint-disable prettier/prettier */
export function currencyFormatter(price: number, currency: string) {
    const currencyFormat = Intl.NumberFormat(window.navigator.language, {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'narrowSymbol',
        currencySign: 'standard',
    });
    return currencyFormat.format(price);
}
