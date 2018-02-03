'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        firstName: 'Wanda',
        lastName: 'Watkins',
        email: 'example@example.com',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        firstName: 'Kelly',
        lastName: 'Jones',
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
