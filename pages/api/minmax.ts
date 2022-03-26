
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMinMax } from '../components/logic/minmax'

//convinient data type to send simple string
type Data = {
  name :string
}

//convinient data type to cover currency description
type Currency = {
  currency: string,
  exchangeRate: number
}

// Type for the specific endpoint
type MinMax = {
  max: Currency,
  min: Currency
}


// this is needed to handle the logic 
async function getMM(){
  //precondition:
  //no precondition
  // returns data object with minimal and maximal currency rate

  var minMax = (await getMinMax()).minmax;
  
  let minimalCurrency: Currency = { currency: minMax.minName, exchangeRate: minMax.minValue };
  let maximalCurrency: Currency = { currency: minMax.maxName, exchangeRate: minMax.maxValue };
  let minMaxObject: MinMax = { max: maximalCurrency, min: minimalCurrency };
  return minMaxObject;
}

// we send wrapped currencies
export default async function handlerMinMax(
  req: NextApiRequest,
  res: NextApiResponse<MinMax>
): Promise<void> {
  // returns the min max object
  let currentOut = await getMM();
  return res.status(200).json({max: currentOut.max, min: currentOut.min});
}



