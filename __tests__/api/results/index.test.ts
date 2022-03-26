// __tests__/api/results/exports/
import { createMocks } from 'node-mocks-http';
import handlerExports from '../../../pages/api/results/index';

describe('/api/results/exports?currency=czk', () => {
  test('returns a JSON with the list of rates', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        currency: 'USD',
      },
    });

    await handlerExports(req, res);

    expect(res._getStatusCode()).toBe(200);
});
})

describe('/api/results/exports?currency=czk', () => {
    test('returns a JSON with the list of rates', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          currency: 'CZK',
        },
      });
  
      await handlerExports(req, res);
  
      expect(res._getStatusCode()).toBe(200);
  });
  })


  describe('/api/results/exports?currency=czk', () => {
    test('returns a JSON with the list of rates', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          currency: 'EUR',
        },
      });
  
      await handlerExports(req, res);
  
      expect(res._getStatusCode()).toBe(200);
  });
  })

  describe('/api/results/exports?currency=czk', () => {
    test('returns a JSON with the list of rates', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          currency: 'GBP',
        },
      });
  
      await handlerExports(req, res);
  
      expect(res._getStatusCode()).toBe(200);
  });
  })