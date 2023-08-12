'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
      await queryInterface.bulkInsert('users', [{
        username: 'ahulosunday@gmail.com',
        id:1,
        password: '$2a$10$dBkqwfARQbWy4kn569JppujDuSP.P4oNm0Oj7.P8PtC.i0FGbRLRG',
        surname: 'Super-admin',
        othername: 'Admin',
        email:'admin@gmail.com',
        uiid:'12a949e0-2f69-11ee-8b5e-47bb6a50763d',
        roleid: 1,
        imgurl: 'images.png',
        phone:'08161381937',
        isActive:true,
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
       
      }
      ], {});
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * */ 
     await queryInterface.bulkDelete('users', null, {});
    
  }
};
