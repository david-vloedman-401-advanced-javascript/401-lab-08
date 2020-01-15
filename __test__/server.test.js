'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

describe(' web server', () => {
  it('should respond with a 500 error', () => {
    return mockRequest
      .get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      })
      .catch(console.error);
  });

  it('should respond with a 404 on invalid route', () => {
    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(console.error);
  });

  it('should respond properly on request to /categories', () => {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on request to /products', ()=>{
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  /**
 * 
 * 
 * 
 */

  it('should respond properly on get request to /categories', () => {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });


  it('should respond properly on post request to /categories', () => {
    return mockRequest
      .post('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });


  it('should respond properly on put request to /categories', () => {
    return mockRequest
      .put('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on delete request to /categories', () => {
    return mockRequest
      .delete('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on get request to /products', () => {
    return mockRequest.get('/products').then(results => {
      expect(results.status).toBe(200);
    });
  });

  it('should respond properly on post request to /products', () => {
    return mockRequest
      .post('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on put request to /products', () => {
    return mockRequest
      .put('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on delete request to /products', () => {
    return mockRequest
      .delete('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
});
