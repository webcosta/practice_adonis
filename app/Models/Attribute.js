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
}

module.exports = Attribute;
