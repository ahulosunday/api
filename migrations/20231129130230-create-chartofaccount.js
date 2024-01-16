'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('chartofaccounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      accountcode: {
        type: DataTypes.STRING
      },
      linecode: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      parentId: {
        type: DataTypes.INTEGER
      },
      levelcode: {
        type: DataTypes.STRING
      },
      isparent: {
        type: DataTypes.STRING
      },
      inuse: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
     
      validate:{
        notEmpty: true,
       
      }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('chartofaccounts');
  }
};