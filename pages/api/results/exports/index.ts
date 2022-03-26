// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getResults} from "../../../components/logic/results"
import { createReadStream, statSync } from 'fs'
import { pipeline } from 'stream'
const fs = require("fs");
import path from 'path'

const filePath = path.resolve('.', 'document.txt')


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  
  const {
    query: {  currency },
    method,
  } : NextApiRequest = req;
  console.log(method);

  let text = await getResults(currency.toString().toUpperCase());
  console.log("result is " + text.toString());
  var goodText : string = "";
  for(let i = 0; i < text.length; i++){
    goodText += text[i] + "\n";
  }
  try {
    fs.writeFileSync("document.txt", goodText)
    //file written successfully
  } catch (err) {
    console.error(err)
  }
  var filePath = path.join(__dirname, '../../../../../document.txt');
  var stat = statSync(filePath);

  res.writeHead(200, {
      'Content-Type': 'txt/*',
      'Content-Length': stat.size
  });

  var readStream = createReadStream(filePath);
  // We replaced all the event handlers with a simple call to readStream.pipe()
  await new Promise(function (resolve) {
    readStream.pipe(res)
    readStream.on('end', resolve)
  })

}
