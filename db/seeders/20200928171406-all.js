'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      'Users',
      [
        {
          fullName: 'Miah Barnes',
          userName: 'Memu',
          email: 'miahellenbarnes@gmail.com',
          password: bcrypt.hashSync('password'),
          gender: 'Female',
          dob: new Date('03-21-1995'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: 'Brandi Jernigan',
          userName: 'Lee',
          email: 'example@email.com',
          password: bcrypt.hashSync('password'),
          gender: 'Female',
          dob: new Date('12-23-1995'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
