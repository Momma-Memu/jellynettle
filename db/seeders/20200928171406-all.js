'use strict';
// const faker = require('faker');
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
          userName: 'Leeloo',
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
        {
          fullName: 'Andrew Barnes',
          userName: 'butlin1994',
          email: 'butlin1994@gmail.com',
          password: bcrypt.hashSync('password'),
          gender: 'Male',
          dob: new Date('02-23-1994'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    const message = await queryInterface.bulkInsert(
      'Messages',
      [
        {
          fromId: users[0].id,
          toId: users[1].id,
          message: 'Hey girl',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fromId: users[1].id,
          toId: users[0].id,
          message: 'Hey girl hey',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      { returning: true }
    );

    const friends = await queryInterface.bulkInsert(
      'Friends',
      [
        {
          userName: users[0].userName,
          friendName: users[1].userName,
          userId: users[0].id,
          friendId: users[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: users[1].userName,
          friendName: users[0].userName,
          userId: users[1].id,
          friendId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: users[0].userName,
          friendName: users[3].userName,
          userId: users[0].id,
          friendId: users[3].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: users[3].userName,
          friendName: users[0].userName,
          userId: users[3].id,
          friendId: users[0].id,
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
        {
          userId: users[3].id,
          message: 'Dank Memes are the way to go my dude.',
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
    const groups = await queryInterface.bulkInsert(
      'Groups',
      [
        {
          name: 'The Cool Group',
          ownerId: users[0].id,
          userCount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    const members = await queryInterface.bulkInsert(
      'Members',
      [
        {
          groupId: groups[0].id,
          userId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: groups[0].id,
          userId: users[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
    await queryInterface.bulkDelete('Groups', null, {});
    await queryInterface.bulkDelete('Replies', null, {});
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Posts', null, {});
    await queryInterface.bulkDelete('Friends', null, {});
    await queryInterface.bulkDelete('Messages', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
