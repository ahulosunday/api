'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
      await queryInterface.bulkInsert('roles', [{
        name: 'Admin',
       description: 'Administrator',
       createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
       
      },
      {
        name: 'Guest',
       description: 'Guest User',
       createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * */ 
     await queryInterface.bulkDelete('roles', null, {});
    
  }
};
