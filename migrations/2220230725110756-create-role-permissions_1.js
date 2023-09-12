'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.sequelize.query('ALTER TABLE role_permissions MODIFY COLUMN id INT AUTO_INCREMENT');
      },
  async down(queryInterface, DataTypes) {
   
      //await queryInterface.dropTable('enrolee_rrr_codes');
       }
};