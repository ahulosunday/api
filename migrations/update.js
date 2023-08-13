'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.renameColumn('users','isactive','isActive');
      //await queryInterface.sequelize.query('UPDATE users set isactive = 1 where id =1');
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * */ 
     //await queryInterface.bulkDelete('roles', null, {});
    
  }
};
