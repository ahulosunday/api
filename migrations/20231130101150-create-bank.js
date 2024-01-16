'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('banks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false,
    },
      accnumber: {
        type: DataTypes.STRING
      },
      acccode: {
        type: DataTypes.STRING
      },
      acctype: {
        type: DataTypes.STRING
      },
      bank: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
        
      validate:{
        notEmpty: true,
       
      }
      },
      chart_of_accountId: {
        type: DataTypes.INTEGER,
        references:{
        model: 'chartofaccounts',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
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
    await queryInterface.dropTable('banks');
  }
};