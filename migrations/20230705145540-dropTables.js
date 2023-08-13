'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
      await queryInterface.dropTable('enrolee_rrr_codes');
       await queryInterface.dropTable('gforms');
      await queryInterface.dropTable('hmos');
     await queryInterface.dropTable('hospitals');
       await queryInterface.dropTable('role_permissions');
       await queryInterface.dropTable('permissions');
       await queryInterface.dropTable('roles');
       await queryInterface.dropTable('user_rrrs');
       await queryInterface.dropTable('wards');
       await queryInterface.dropTable('lgas');
       await queryInterface.dropTable('states');
       await queryInterface.dropTable('regions');
       await queryInterface.dropTable('countries');
       await queryInterface.dropTable('gifshipPackages');
       await queryInterface.dropTable('gifshiptypes');
       await queryInterface.dropTable('gifships');
       await queryInterface.dropTable('users');
       //await queryInterface.sequelize.query('delete from sequelizemeta');
    
  },
  async down(queryInterface, DataTypes) {
   
      await queryInterface.dropTable('enrolee_rrr_codes');
       await queryInterface.dropTable('gforms');
          await queryInterface.dropTable('hmos');
     await queryInterface.dropTable('hospitals');
       await queryInterface.dropTable('role_permissions');
       await queryInterface.dropTable('permissions');
       await queryInterface.dropTable('roles');
       await queryInterface.dropTable('user_rrrs');
       await queryInterface.dropTable('wards');
       await queryInterface.dropTable('lgas');
       await queryInterface.dropTable('states');
       await queryInterface.dropTable('regions');
       await queryInterface.dropTable('countries');
       await queryInterface.dropTable('gifshippackages');
       await queryInterface.dropTable('gifshiptypes');
       await queryInterface.dropTable('gifships');
       await queryInterface.dropTable('users');
       await queryInterface.query('delete from sequelizemeta');
  }
};