'use strict';

const express = require('express');
const router = express.Router();

const Categories = require('../../models/categoryModel');
const categories = new Categories();
const Products = require('../../models/productModel');
const products = new Products();

// Esoteric Resources
const errorHandler = require('../middleware/error.js');
const notFound = require('../middleware/404.js');

router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategories);
router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategories);
router.delete('/api/v1/categories/:id', deleteCategories);

router.get('/api/v1/products', getProducts);
router.post('/api/v1/products', postProducts);
router.get('/api/v1/products/:id', getProduct);
router.put('/api/v1/products/:id', putProducts);
router.delete('/api/v1/products/:id', deleteProducts);

router.use(notFound);
router.use(errorHandler);
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function getProducts(request, response, next) {
  // expects an array of objects back
  products
    .get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function getProduct(request, response, next) {
  // expects an array with one object in it
  products
    .get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function postProducts(request, response, next) {
  
  products    
    .post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function putProducts(request, response, next) {
  // expects the record that was just updated in the database
  products
    .put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function deleteProducts(request, response, next) {
  // Expects no return value (the resource should be gone)
  products
    .delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}


/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function getCategories(request, response, next) {
  // expects an array of object to be returned from the model

  categories
    .get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function getCategory(request, response, next) {
  // expects an array with the one matching record from the model

  
  categories
    .get(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function postCategories(request, response, next) {
  // expects the record that was just added to the database
  console.log('request',request.body);
  categories
    .post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function putCategories(request, response, next) {
  // expects the record that was just updated in the database
  categories
    .put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function deleteCategories(request, response, next) {
  // Expects no return value (resource was deleted)
  categories
    .delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = router;