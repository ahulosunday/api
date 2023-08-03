'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions', [
      {
        name: 'ADD_ROLES',
        description:"Can add roles to users"
      },
       {
        name: 'VIEW_ALL_MEMBERS',
        description:"Can view all members or enrollees"
      },
        {
      name: 'ADD_USER',
      description:"Can add new user"
    },
      {
        name: 'EDIT_USER',
        description:"Can edi new user"
      },
      {
        name: 'VIEW_USER',
        description:"Can view new users"
      },
      {
        name: 'DELETE_USER',
        description:"Can delete users"
      },
      {
        name: 'ADD_ROLE',
        description:"Can add new role"
      },
      {
        name: 'EDIT_ROLE',
        description:"Can edit roles"
      },
      {
        name: 'VIEW_ROLE',
        description:"Can view roles"
      },
      {
        name: 'DELETE_ROLE',
        description:"Can delete roles"
      },
      {
        name: 'ADD_RRR',
        description:"Can add RRR"
      },
      {
        name: 'EDIT_RRR',
        description:"Can edit RRR"
      },
      {
        name: 'VIEW_RRR',
        description:"Can view RRR"
      },
      {
        name: 'DELETE_RRR',
        description:"Can delete RRR"
      },
      {
        name: 'ADD_GIFSHIP_TYPE',
        description:"Can add Gifship type"
      },
      {
        name: 'EDIT_GIFSHIP_TYPE',
        description:"Can edit Gifship type"
      },
      {
        name: 'VIEW_GIFSHIP_TYPE',
        description:"Can view Gifship type"
      },
      {
        name: 'DELETE_GIFSHIP_TYPE',
        description:"Can delete Gifship type"
      },
      {
        name: 'ADD_GIFSHIP_PACKAGE',
        description:"Can add Gifship Package"
      },
      {
        name: 'EDIT_GIFSHIP_PACKAGE',
        description:"Can edit Gifship Package"
      },
      {
        name: 'VIEW_GIFSHIP_PACKAGE',
        description:"Can view Gifship Package"
      },
      {
        name: 'DELETE_GIFSHIP_PACKAGE',
        description:"Can delete Gifship Package"
      },
      {
        name: 'ADD_MEMBERSHIP_FORM',
        description:"Can add membership form"
      },
      {
        name: 'EDIT_MEMBERSHIP_FORM',
        description:"Can edit membership form"
      },
      {
        name: 'VIEW_MEMBERSHIP_FORM',
        description:"Can view membership form"
      },
      {
        name: 'DELETE_MEMBERSHIP_FORM',
        description:"Can delete membership form"
      },
      {
        name: 'ADD_COUNTRY',
        description:"Can add country"
      },
      {
        name: 'EDIT_COUNTRY',
        description:"Can edit country"
      },
      {
        name: 'VIEW_COUNTRY',
        description:"Can view country"
      },
      {
        name: 'DELETE_COUNTRY',
        description:"Can delete country"
      },
      {
        name: 'ADD_REGIONS',
        description:"Can add regions"
      },
      {
        name: 'EDIT_REGIONS',
        description:"Can edit regions"
      },
      {
        name: 'VIEW_REGIONS',
        description:"Can view regions"
      },
      {
        name: 'DELETE_REGIONS',
        description:"Can delete regions"
      },
      {
        name: 'ADD_STATES',
        description:"Can add states"
      },
      {
        name: 'EDIT_STATES',
        description:"Can edit states"
      },
      {
        name: 'VIEW_STATES',
        description:"Can view states"
      },
      {
        name: 'DELETE_STATES',
        description:"Can delete states"
      },
      {
        name: 'ADD_LGAS',
        description:"Can add Lgas"
      },
      {
        name: 'EDIT_LGAS',
        description:"Can edit Lgas"
      },
      {
        name: 'VIEW_LGAS',
        description:"Can view Lgas"
      },
      {
        name: 'DELETE_LGAS',
        description:"Can delete Lgas"
      },
      {
        name: 'ADD_HOSPITAL',
        description:"Can add Primary Healthcare"
      },
      {
        name: 'EDIT_HOSPITAL',
        description:"Can edit Primary Healthcare"
      },
      {
        name: 'VIEW_HOSPITAL',
        description:"Can view Primary Healthcare"
      },
      {
        name: 'DELETE_HOSPITAL',
        description:"Can delete Primary Healthcare"
      },
      {
        name: 'ADD_HMOS',
        description:"Can add HMOS"
      },
      {
        name: 'EDIT_HMOS',
        description:"Can edit HMOS"
      },
      {
        name: 'VIEW_HMOS',
        description:"Can View HMOS"
      },
      {
        name: 'DELETE_HMOS',
        description:"Can Delete HMOS"
      },
      {
        name: 'ADD_WARDS',
        description:"Can add wards"
      },
      {
        name: 'EDIT_WARDS',
        description:"Can edit ward"
      },
      {
        name: 'VIEW_WARDS',
        description:"Can View wards"
      },
      {
        name: 'DELETE_WARDS',
        description:"Can Delete wards"
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
