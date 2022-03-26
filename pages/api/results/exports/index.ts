// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getResults} from "../../../components/logic/results"
import { createReadStream, statSync } from 'fs'
const fs = require("fs");
import path from 'path'

export default async function handlerExports(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //preconditions:
  //correct query parameters
  //postcondition:
  //sends a file when api called

  const {
    query: {  currency },
    method,
  } : NextApiRequest = req;
  //console.log(method);

  // received text and transformation to the needed string
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
  // relative path to the generated file
  var filePath = path.join(__dirname, '../../../../../document.txt');
  var stat = statSync(filePath);

  // setting the file we will send
  res.writeHead(200, {
      'Content-Type': 'txt/*',
      'Content-Length': stat.size
  });

  // creating reading stream
  var readStream = createReadStream(filePath);
  // We replaced all the event handlers with a simple call to readStream.pipe()
  await new Promise(function (resolve) {
    readStream.pipe(res)
    readStream.on('end', resolve)
  })
}
