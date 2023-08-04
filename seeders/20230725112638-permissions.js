'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions', [
      {
        name: 'ADD_ROLES',
        description:"Can add roles to users",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
       {
        name: 'VIEW_ALL_MEMBERS',
        description:"Can view all members or enrollees",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
        {
      name: 'ADD_USER',
      description:"Can add new user",
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
      {
        name: 'EDIT_USER',
        description:"Can edi new user",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_USER',
        description:"Can view new users",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_USER',
        description:"Can delete users",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_ROLE',
        description:"Can add new role",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_ROLE',
        description:"Can edit roles",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_ROLE',
        description:"Can view roles",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_ROLE',
        description:"Can delete roles",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_RRR',
        description:"Can add RRR",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_RRR',
        description:"Can edit RRR",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_RRR',
        description:"Can view RRR",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_RRR',
        description:"Can delete RRR",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_GIFSHIP_TYPE',
        description:"Can add Gifship type",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_GIFSHIP_TYPE',
        description:"Can edit Gifship type",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_GIFSHIP_TYPE',
        description:"Can view Gifship type",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_GIFSHIP_TYPE',
        description:"Can delete Gifship type",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_GIFSHIP_PACKAGE',
        description:"Can add Gifship Package",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_GIFSHIP_PACKAGE',
        description:"Can edit Gifship Package",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_GIFSHIP_PACKAGE',
        description:"Can view Gifship Package",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_GIFSHIP_PACKAGE',
        description:"Can delete Gifship Package",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_MEMBERSHIP_FORM',
        description:"Can add membership form",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_MEMBERSHIP_FORM',
        description:"Can edit membership form",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_MEMBERSHIP_FORM',
        description:"Can view membership form",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_MEMBERSHIP_FORM',
        description:"Can delete membership form",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_COUNTRY',
        description:"Can add country",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_COUNTRY',
        description:"Can edit country",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_COUNTRY',
        description:"Can view country",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_COUNTRY',
        description:"Can delete country",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_REGIONS',
        description:"Can add regions",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_REGIONS',
        description:"Can edit regions",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_REGIONS',
        description:"Can view regions",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_REGIONS',
        description:"Can delete regions",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_STATES',
        description:"Can add states",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_STATES',
        description:"Can edit states",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_STATES',
        description:"Can view states",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_STATES',
        description:"Can delete states",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_LGAS',
        description:"Can add Lgas",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_LGAS',
        description:"Can edit Lgas",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_LGAS',
        description:"Can view Lgas",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_LGAS',
        description:"Can delete Lgas",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_HOSPITAL',
        description:"Can add Primary Healthcare",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_HOSPITAL',
        description:"Can edit Primary Healthcare",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_HOSPITAL',
        description:"Can view Primary Healthcare",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_HOSPITAL',
        description:"Can delete Primary Healthcare",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_HMOS',
        description:"Can add HMOS",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_HMOS',
        description:"Can edit HMOS",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_HMOS',
        description:"Can View HMOS",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_HMOS',
        description:"Can Delete HMOS",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'ADD_WARDS',
        description:"Can add wards",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'EDIT_WARDS',
        description:"Can edit ward",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'VIEW_WARDS',
        description:"Can View wards",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      {
        name: 'DELETE_WARDS',
        description:"Can Delete wards",
        createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
      },
      


    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
