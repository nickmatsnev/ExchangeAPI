import { getExchange } from '../rapidAPI/getExchange';
import {getAllCurrencies} from '../allCurrencies'

// simple type to cover the needs for struct here
type Currency = {
  name: string,
  value: number
}


export async function getResults(givenCurrencyName : string) {
  //precondition:
  //specified currency
  //postcondition:
  //returns a list of currency rates and their names


  let givenCurrency : string = givenCurrencyName;
  // error handling
  if(givenCurrencyName === null || givenCurrencyName == ' '){
    givenCurrency = 'CZK';
  }

  let allCurrencies: string[] = getAllCurrencies();
  
  // error handling
  if(!allCurrencies.includes(givenCurrency)){
    return ["Error!"];
  }

  let listOfCurrencies : Currency[] = [];

  for (let i = 0; i < allCurrencies.length - 1; i++) {
    if(allCurrencies[i] != givenCurrency){
      let currentExchangeValue: any = await getExchange(allCurrencies[i], givenCurrency);
      console.log(currentExchangeValue);

      // error handling
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
