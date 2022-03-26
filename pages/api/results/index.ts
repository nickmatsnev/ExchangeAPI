import { NextApiRequest, NextApiResponse } from "next";
import {getResults} from "../../components/logic/results"

//convinient data type to send simple string
type Data = {
  data : string[]
}

export default async (request: NextApiRequest, response: NextApiResponse<Data>) => {
  //precondition:
  // currency is input correctly
  //postcondition:
  // returns the convertation rates

  // simple object to read the url params
  const {
    query: {  currency },
    method,
  } : NextApiRequest = request;
  console.log(method);

  // getting data from RapidAPI
  let result : string[] = await getResults( currency.toString().toUpperCase());
  
  //return what was asked
  return response.status(200).json({ data : result });
};
