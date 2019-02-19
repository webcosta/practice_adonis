/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RoleSchema extends Schema {
  up() {
    this.create('roles', table => {
      table.increments();
      table
        .string('name')
        .notNullable()
        .unique();
      table.text('describtion').nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('roles');
  }
}

module.exports = RoleSchema;
