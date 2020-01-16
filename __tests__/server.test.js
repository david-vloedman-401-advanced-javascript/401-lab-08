'use strict';

const {server} = require('../src/app');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Product API', ()=>{
  it('can post a new product', ()=>{
    let obj = {name: 'david', amount: 1};
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then(data => {
      
        let record = data.body;
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  xit('can get a new product', ()=>{
    return mockRequest
      .get('/api/v1/products')
      .send()
      .then(data => {
        console.log(data.body);
        expect(data).toBe('');
      });
  });


});