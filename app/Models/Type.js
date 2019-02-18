/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Base = require('./Base');

class Type extends Base {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  products() {
    return this.belongsToMany('App/Models/Product');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute');
  }
}

module.exports = Type;
