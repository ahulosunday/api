'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions', [
      {
        name: 'ADD_ROLES',
        description:"Can add roles to users",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
       {
        name: 'VIEW_ALL_MEMBERS',
        description:"Can view all members or enrollees",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
        {
      name: 'ADD_USER',
      description:"Can add new user",
      createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
    },
      {
        name: 'EDIT_USER',
        description:"Can edi new user",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_USER',
        description:"Can view new users",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_USER',
        description:"Can delete users",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_ROLE',
        description:"Can add new role",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_ROLE',
        description:"Can edit roles",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_ROLE',
        description:"Can view roles",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_ROLE',
        description:"Can delete roles",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_RRR',
        description:"Can add RRR",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_RRR',
        description:"Can edit RRR",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_RRR',
        description:"Can view RRR",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_RRR',
        description:"Can delete RRR",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_GIFSHIP_TYPE',
        description:"Can add Gifship type",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_GIFSHIP_TYPE',
        description:"Can edit Gifship type",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_GIFSHIP_TYPE',
        description:"Can view Gifship type",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_GIFSHIP_TYPE',
        description:"Can delete Gifship type",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_GIFSHIP_PACKAGE',
        description:"Can add Gifship Package",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_GIFSHIP_PACKAGE',
        description:"Can edit Gifship Package",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_GIFSHIP_PACKAGE',
        description:"Can view Gifship Package",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_GIFSHIP_PACKAGE',
        description:"Can delete Gifship Package",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_MEMBERSHIP_FORM',
        description:"Can add membership form",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_MEMBERSHIP_FORM',
        description:"Can edit membership form",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_MEMBERSHIP_FORM',
        description:"Can view membership form",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_MEMBERSHIP_FORM',
        description:"Can delete membership form",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_COUNTRY',
        description:"Can add country",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_COUNTRY',
        description:"Can edit country",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_COUNTRY',
        description:"Can view country",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_COUNTRY',
        description:"Can delete country",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_REGIONS',
        description:"Can add regions",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_REGIONS',
        description:"Can edit regions",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_REGIONS',
        description:"Can view regions",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_REGIONS',
        description:"Can delete regions",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_STATES',
        description:"Can add states",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_STATES',
        description:"Can edit states",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_STATES',
        description:"Can view states",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_STATES',
        description:"Can delete states",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_LGAS',
        description:"Can add Lgas",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_LGAS',
        description:"Can edit Lgas",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_LGAS',
        description:"Can view Lgas",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_LGAS',
        description:"Can delete Lgas",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_HOSPITAL',
        description:"Can add Primary Healthcare",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_HOSPITAL',
        description:"Can edit Primary Healthcare",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_HOSPITAL',
        description:"Can view Primary Healthcare",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_HOSPITAL',
        description:"Can delete Primary Healthcare",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_HMOS',
        description:"Can add HMOS",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_HMOS',
        description:"Can edit HMOS",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_HMOS',
        description:"Can View HMOS",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_HMOS',
        description:"Can Delete HMOS",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'ADD_WARDS',
        description:"Can add wards",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'EDIT_WARDS',
        description:"Can edit ward",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'VIEW_WARDS',
        description:"Can View wards",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
      },
      {
        name: 'DELETE_WARDS',
        description:"Can Delete wards",
        createdAt: DataTypes.NOW(),
       updatedAt: DataTypes.NOW()
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
