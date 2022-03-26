import {getCurrencies} from '../rapidAPI/getCurrencies';
import { getExchange } from '../rapidAPI/getExchange';
import {getAllCurrencies} from '../allCurrencies'

// Type for the specific endpoint
type MinMax = {
    maxValue : number;
    maxName: string;
    minValue : number;
    minName : string;
}

// Wrapper Type for the specific endpoint
type MinMaxWrapper = {
    minmax : MinMax;
}

export async function getMinMax() {
    //precondition:
    // none, except for RapidAPI working correctly but that's like basic
    //postcondition:
    // returns smallest and biggest values of exchange for CZK
    
    
    
    
    let allCurrencies: string[] = getAllCurrencies();

    // extremely naiv and ultra simple
    // min max algorithm
    let lmin: number = Number.MAX_SAFE_INTEGER;
    let lmax: number = Number.MIN_SAFE_INTEGER;
    let lMaxName: string = 'CZK';
    let lMinName: string = 'CZK';
    
    for (let i = 0; i < allCurrencies.length - 1; i++) {

        let currentExchange: any = await getExchange(allCurrencies[i], 'CZK');

        if (isNaN(currentExchange) || currentExchange == 0) {

            console.log(allCurrencies[i]);
            console.log('Incorrect exchange value');
            console.log(currentExchange);
            continue;
        }
        if (currentExchange > lmax) {
            lmax = currentExchange;
            lMaxName = allCurrencies[i];
        }
        if (currentExchange < lmin) {
            lmin = currentExchange;
            lMinName = allCurrencies[i];
        }
    }
    let minMaxResult: MinMax = {
        maxValue: lmax,
        maxName: lMaxName,
        minValue: lmin,
        minName: lMinName
    };
    let minMaxPassedObj : MinMaxWrapper = {
        minmax : minMaxResult
    };
    return minMaxPassedObj;
}