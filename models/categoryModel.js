'use strict';

const DataModel = require('./mongoModel');
const schema = require('./productSchema');
/**
 * @class
 */
class Categories extends DataModel {
  constructor() {
    super(schema);
  }
}

module.exports = Categories;
