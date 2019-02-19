/** @type {import('@adonisjs/lucid/src/Factory')} */
const Role = use('App/Models/Role');

class RoleSeeder {
  async run() {
    await Role.query().delete();

    const roles = [
      { name: 'admin', description: 'Admin of the app. All actions allowed' },
      { name: 'user', description: 'Regular user. Can manage his entries' },
      { name: 'guest', description: 'Just a guest. Can only observe ads' }
    ];
    await Role.createMany(roles);
  }
}

module.exports = RoleSeeder;
