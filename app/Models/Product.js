/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  static get updatedAtColumn() {
    return null;
  }

  user() {
    return this.belongsToMany('App/Models/User');
  }

  type() {
    return this.belongsToMany('App/Models/Type');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute')
      .pivotModel('App/Models/ProductAttribute')
      .withPivot('value');
  }
}

module.exports = Product;
