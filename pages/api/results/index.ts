import { NextApiRequest, NextApiResponse } from "next";
import {getResults} from "../../components/logic/results"

type Data = {
  data : string[]
}

export default async (request: NextApiRequest, response: NextApiResponse<Data>) => {

  const {
    query: {  currency },
    method,
  } : NextApiRequest = request;
  console.log(method);

  let result : string[] = await getResults( currency.toString().toUpperCase());
  return response.status(200).json({ data : result });
};
