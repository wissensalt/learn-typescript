import * as promptSync from 'prompt-sync';

enum Currency {
    IDR, USD, EUR
}
function selectCurrency(currency: string): Currency {
    if (currency === 'IDR') {
        return Currency.IDR;
    }

    if (currency === 'USD') {
        return Currency.USD;
    }

    if (currency === 'EUR') {
        return Currency.EUR;
    }

    return Currency.IDR;
}

interface CurrencyResult {
    idr: number;
    usd: number;
    eur: number;
}

function currencyConverter(currency: Currency, value: number): CurrencyResult {
    let idr: number = 0;
    let usd: number = 0;
    let eur: number = 0;
    if (currency === Currency.IDR) {
        idr = value;
        usd = value * 15000;
        eur = value * 20000;
    }

    if (currency === Currency.USD) {
        idr = value / 15000;
        usd = value;
        eur = value / 20000;
    }

    if (currency === Currency.EUR) {
        idr = value / 20000;
        usd = value / 15000;
        eur = value;
    }

    return {
        idr: idr,
        usd: usd,
        eur: eur
    }
}

const prompt = promptSync();
console.log(`1. IDR \n2. USD \n3. EUR \n`);
const chooseCurrency: string = prompt("Select currency : ")
const value: number = prompt("Input value : ")
const selectedCurrency: Currency = selectCurrency(chooseCurrency);
const result: CurrencyResult = currencyConverter(selectedCurrency, value);
console.log(result);
