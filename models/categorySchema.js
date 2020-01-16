'use strict';

const mongoose = require('mongoose');

const categories = new mongoose.Schema({  
  category_id: { type: String, required: true},
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  quantity_in_stock: { type: Number, required: true },
});
/**
 * @function 
 */
categories.post('findOne', rec => {
  console.log(`Record found ${rec}`);
});

/**
 * @function 
 */
categories.post('find', () => {
  console.log(`Record not found`);
});

/**
 * @function 
 */
categories.post('save', () => {
  console.log('Record saved');
});
module.exports = mongoose.model('categories', categories);
