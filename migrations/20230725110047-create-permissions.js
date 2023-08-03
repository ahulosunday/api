'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:{type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          notNull: true,
          notEmpty: true,
        }
      },
      description:{type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          notNull: true,
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
    await queryInterface.dropTable('permissions');
  }
};