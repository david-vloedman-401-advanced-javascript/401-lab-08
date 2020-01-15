'use strict';

const server = require('../lib/server');

const supertest = require('supertest');

const mock = supertest(server);



describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); //spy on the next method;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    server.log(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    server.log(req, res, next);
    expect(next).toHaveBeenCalled();
  });  
});

describe('timeStamp middleware', ()=> {
  let req = {};
  let res = {};
  let next = jest.fn();

  it('should adds a requestTime varible to the request object', ()=> {
    server.timestamp(req, res, next);
    expect(req.requestTime).toBeDefined();
  });

  it('properly moves to the next middleware', () => {
    server.timestamp(req, res, next);
    expect(next).toHaveBeenCalled();
  });  
});