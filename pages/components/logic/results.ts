import { getExchange } from '../rapidAPI/getExchange';
import {getAllCurrencies} from '../allCurrencies'

type Currency = {
  name: string,
  value: number
}


export async function getResults(givenCurrencyName : string) {

  let givenCurrency : string = givenCurrencyName;

  if(givenCurrencyName === null || givenCurrencyName == ' '){
    givenCurrency = 'CZK';
  }

  let allCurrencies: string[] = getAllCurrencies();

  if(!allCurrencies.includes(givenCurrency)){
    return "Error!";
  }

  let listOfCurrencies : Currency[] = [];

  for (let i = 0; i < allCurrencies.length - 1; i++) {
    if(allCurrencies[i] != givenCurrency){
      let currentExchangeValue: any = await getExchange(allCurrencies[i], givenCurrency);
      console.log(currentExchangeValue);
      if (isNaN(currentExchangeValue) || currentExchangeValue == 0) {
  
          console.log(allCurrencies[i]);
          console.log('Incorrect exchange value');
          console.log(currentExchangeValue);
          continue;
      }
  
      let currentCurrency : Currency = { name : allCurrencies[i], value : currentExchangeValue};
      listOfCurrencies.push(currentCurrency);
    }
  }
  
  listOfCurrencies.sort((a, b) => (a.value > b.value ? -1 : 1));
  let currenciesSortedString : string[] = []; 
  for(let i = 0; i < listOfCurrencies.length - 1; i++){
    if(i != listOfCurrencies.length - 2){
      currenciesSortedString.push((i + 1) + ". 1 " + listOfCurrencies[i].name + " -> " + listOfCurrencies[i].value + " " + givenCurrency + ",");
    }else{
      currenciesSortedString.push((i + 1) + ". 1 " + listOfCurrencies[i].name + " -> " + listOfCurrencies[i].value + " " + givenCurrency);
    }
  }
return currenciesSortedString;
}
