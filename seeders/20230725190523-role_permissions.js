'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    await queryInterface.bulkInsert('role_permissions', [{
     roleId: 1,
     permissionId: 1,
     createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
    }], {});
*/
  },

  async down (queryInterface, DataTypes) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
