/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Base = require('./Base');

class Product extends Base {
  static get updatedAtColumn() {
    return null;
  }

  users() {
    return this.belongsToMany('App/Models/User');
  }

  types() {
    return this.belongsToMany('App/Models/Type');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute')
      .pivotModel('App/Models/ProductAttribute')
      .withPivot('value');
  }
}

module.exports = Product;
