/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User');

class UserSeeder {
  async run() {
    await User.query().delete();

    const users = [
      { username: 'Admin', email: 'admin@host.com', password: '123456', role: 'admin' },
      { username: 'Guest1', email: 'guest1@host.com', password: '123456', role: 'guest' },
      { username: 'Guest2', email: 'guest2@host.com', password: '123456', role: 'guest' }
    ];
    await User.createMany(users);
  }
}

module.exports = UserSeeder;
