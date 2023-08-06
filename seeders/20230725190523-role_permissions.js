'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
      await queryInterface.bulkDelete('role_permissions', null, {});
    await queryInterface.bulkInsert('role_permissions', [
      {
     roleId: 1,
     permissionId: 1,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    {
     roleId: 1,
     permissionId: 2,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    {
     roleId: 1,
     permissionId: 3,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    {
     roleId: 1,
     permissionId: 4,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    {
     roleId: 1,
     permissionId: 5,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
   {
     roleId: 1,
     permissionId: 6,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    {
     roleId: 1,
     permissionId: 7,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    {
     roleId: 1,
     permissionId: 8,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    }
    ,
    {
     roleId: 1,
     permissionId: 9,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    }
    ,
    {
     roleId: 1,
     permissionId: 10,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    }
    
    ], {});

  },

  async down (queryInterface, DataTypes) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     **/ 
     await queryInterface.bulkDelete('role_permissions', null, {});
     
  }
};
