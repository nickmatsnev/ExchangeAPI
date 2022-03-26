// importing fetch for getting data
import fetch from 'node-fetch';
// and getting the list of currencies
import {getAllCurrencies} from '../allCurrencies'

// in this particular case we have type Currency
type Currency = {
  name: string;
};

// and Currencies which is just a nice wrapper for the Currency array
type Currencies = {
  data: Currency[];
};

// we declare the variable in charge for the list of currencies
let allCurrencies:string[] = getAllCurrencies();

export async function getExchange(firstCurrency : string, secondCurrency : string) {
  // precondition:
  // first and second currencies must be in the list, otherwise unknown argument error
  // postcondition:
  // returns number type value which is current exchange rate at rapidAPI from first currency to the second currency 
  
  if(allCurrencies.includes(firstCurrency) && allCurrencies.includes(secondCurrency) && firstCurrency != secondCurrency){
    try {
    
      // const response: Response
      const response = await fetch('https://currency-exchange.p.rapidapi.com/exchange?from=' + firstCurrency  + '&to='  + secondCurrency + '&q=9.0', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
          'X-RapidAPI-Key': 'f6befe5070msh542bbbebac4fe09p148ba2jsn5df684eec460',
          useQueryString: "true"
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      // const result: number
      const result = (await response.json()) as number;
  
      console.log('Exchange: ', JSON.stringify(result, null, 4));
  
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }else{
    // error and my debug
    console.log('Incorrect values of currencies');
    //console.log(firstCurrency);
    //console.log(secondCurrency);
    return null;
  }
  
}
//default values
getExchange('CZK', 'USD');