'use strict';

const express = require('express');


const app = express();


app.get('/products', timestamp, logger, read);
app.post('/products', timestamp, logger, create);
app.put('/products', timestamp, logger, update);
app.delete('/products', timestamp, logger, destroy);

app.get('/categories', timestamp, logger, read);
app.post('/categories', timestamp, logger, create);
app.put('/categories', timestamp, logger, update);
app.delete('/categories', timestamp, logger, destroy);

app.use('*', handle404);
app.use(handle500);

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function create(req, res){ 
  res.status(200);
  res.json(req.query.record);
  
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function update(req, res){  
  res.status(200);
  res.json(req.query.record);  
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function read(req, res){
  res.status(200);
  res.send('Read');
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

function destroy(req, res){
  res.status(200)
    .json(req.query.record);
  
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function timestamp(req, res, next){
  req.requestTime = new Date().toString();  
  next();
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function logger(req, res, next){
  console.log(req.path);
  console.log(req.requestTime);  
  next();
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function handle404(req, res, next){
  console.log('Route does not exist');
  res.status(404);
  res.send('Route does not exist');
  res.end();
}
/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function handle500(err, req, res, next){
  console.log(err);
  res.status(500).send(err);
}

module.exports = {
  app: app,
  start: port => app.listen(port = 3000, ()=> console.log(`Listening on port ${port}...`)),
  log: (req, res, nxt) => logger(req, res, nxt),
  timestamp: (req, res, nxt) => timestamp(req, res, nxt),

};

