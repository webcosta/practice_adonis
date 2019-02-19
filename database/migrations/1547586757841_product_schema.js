/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.string('name', 60).notNullable();
      table.integer('type_id').notNullable();
      table.integer('user_id').notNullable();

      table
        .decimal('price')
        .notNullable()
        .default(0);

      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');
      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
