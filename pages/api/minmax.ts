
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMinMax } from '../components/logic/minmax'

type Data = {
  name :string
}

type Currency = {
  currency: string,
  exchangeRate: number
}

type minMaxResult = {
  maxValue : number;
  maxName: string;
  minValue : number;
  minName : string;
}

type MinMax = {
  max: Currency,
  min: Currency
}

async function getMM(){
  var minMax = (await getMinMax()).minmax;
  
  let  minMaxObj : minMaxResult = {
    maxValue : minMax.maxValue,
    maxName : minMax.maxName,
    minValue : minMax.minValue,
    minName : minMax.minName
  }
  let minimalCurrency: Currency = { currency: minMax.minName, exchangeRate: minMax.minValue };
  let maximalCurrency: Currency = { currency: minMax.maxName, exchangeRate: minMax.maxValue };
  let minMaxObject: MinMax = { max: maximalCurrency, min: minimalCurrency };
  return minMaxObject;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MinMax>
): Promise<void> {
  let currentOut = await getMM();
  res.status(200).json({max: currentOut.max, min: currentOut.min});
}



