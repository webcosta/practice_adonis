/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TypeSchema extends Schema {
  up() {
    this.create('types', table => {
      table.increments();
      table
        .string('name', 30)
        .notNullable()
        .unique();
    });
  }

  down() {
    this.drop('types');
  }
}

module.exports = TypeSchema;
