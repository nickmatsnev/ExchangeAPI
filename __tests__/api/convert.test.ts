// __tests__/api/results/exports/
import { createMocks } from 'node-mocks-http';
import handlerConvert from '../../pages/api/convert';

describe('/api/results/exports?currency=czk', () => {
  test('returns a convertions based on provided JSON', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: 
        [
            {
               "from":{
                  "currency":"EUR",
                  "quantity":2
               },
               "to":"CZK"
            },
            {
               "from":{
                  "currency":"USD",
                  "quantity":4
               },
               "to":"AUD"
            }
         ]
      
    });

    await handlerConvert(req, res);

    expect(res._getStatusCode()).toBe(200);
});
})

describe('/api/results/exports?currency=czk', () => {
  test('returns a convertions based on provided JSON', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: 
        [
            {
               "from":{
                  "currency":"RUB",
                  "quantity":12000
               },
               "to":"CZK"
            },
            {
               "from":{
                  "currency":"EUR",
                  "quantity":43
               },
               "to":"AUD"
            }
         ]
      
    });

    await handlerConvert(req, res);

    expect(res._getStatusCode()).toBe(200);
});
})