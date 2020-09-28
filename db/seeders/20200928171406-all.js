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
        {
          fullName: 'Demo',
          userName: 'Demo',
          email: 'demo@email.com',
          password: bcrypt.hashSync('password'),
          gender: 'Non-binary',
          dob: new Date('02-23-1990'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    const friends = await queryInterface.bulkInsert(
      'Friends',
      [
        {
          usernName: users[0].userName,
          friendName: users[1].userName,
          userId: users[0].id,
          friendId: users[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    const posts = await queryInterface.bulkInsert(
      'Posts',
      [
        {
          userId: users[0].id,
          message: 'If a developer makes an app, and nobody uses it, does it actually exist?',
          likeCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: users[1].id,
          message: 'Puppies are cute and we do not deserve them.',
          likeCount: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    const comments = await queryInterface.bulkInsert(
      'Comments',
      [

      ],
      { returning: true }
    );

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
