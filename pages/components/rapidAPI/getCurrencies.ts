// 👇️ only necessary if running in Node.js
// (Remove this line if running in the browser)
import fetch from 'node-fetch';

type Currency = {
  name: string;
};

type Currencies = {
  data: Currency[];
};

export async function getCurrencies() {
  try {
    // 👇️ const response: Response
    const response = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', {
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

    // 👇️ const result: GetUsersResponse
    const result = (await response.json()) as string[];

    console.log('ress: ', JSON.stringify(result, null, 4));

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
}

getCurrencies();

