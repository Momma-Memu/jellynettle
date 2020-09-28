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
          email: 'brandi.jernigan@gmail.com',
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
        {
          userId: users[1].id,
          postId: posts[0].id,
          message: 'Nerd.',
          likeCount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: users[0].id,
          postId: posts[1].id,
          message: 'This is true',
          likeCount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    const replies = await queryInterface.bulkInsert(
      'Replies',
      [
        {
          userId: users[0].id,
          commentId: comments[0].id,
          message: 'WOW okay....WOW, I mean...Wow.',
          likeCount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: users[1].id,
          commentId: comments[1].id,
          message: 'Obviously.',
          likeCount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
