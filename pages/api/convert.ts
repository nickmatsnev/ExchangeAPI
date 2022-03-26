// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getExchange} from '../components/rapidAPI/getExchange'


//convinient data type to send simple string
type Data = {
  name: string[]
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //precondition:
  // POST request with correct specified variables
  //postcondition:
  // return the array of string with processed information


  // if we do not have anything in body this request is pointless
  if (req.method !== 'POST') {
    res.status(405).send({ name: ['Only POST requests allowed'] })
  }

  // what is to be sent in responce
  let convertationsResults : string[] = [];
  
  // parsime jsonove telo
  const body = JSON.parse(JSON.stringify(req.body))
  
  // to handle each line with exchange demand
  for(let entry of body){
    // my debug
    //console.log(entry)
    let currentResult : string = '';
    let currentExchange: any = await getExchange(entry.from.currency, entry.to);

    // classic mistake check
    if (isNaN(currentExchange) || currentExchange == 0) {
        console.log('Incorrect exchange value');
        console.log(currentExchange);
        continue;
    }

    // final value
    let finalValue : number = entry.from.quantity * currentExchange;
    // concatenating the string and adding it to the main array
    currentResult += entry.from.quantity + ' ' + entry.from.currency + ' - ' + entry.to + ' -> ' + finalValue;
    convertationsResults.push(currentResult);
  }

  // send it to someone:)
  res.status(200).json({ name: convertationsResults })
  return convertationsResults;
}
