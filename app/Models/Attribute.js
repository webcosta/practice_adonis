/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
// const Model = use('Model');
const Base = require('./Base');

class Attribute extends Base {
  types() {
    return this.hasOne('App/Models/Type');
  }

  productAttributes() {
    return this.belongsToMany('App/Models/ProductAttribute');
  }

  // products() {
  //   return this.manyThrogh('App/Models/ProductAttributes', 'product_id');
  // }
}

module.exports = Attribute;
