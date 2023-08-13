'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('hmos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }

    },
      code:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }

    },
      userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'users',
        key: 'id',
        
      },
      
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
      validate:{
        notEmpty: true,
        notNull: true,
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
    await queryInterface.dropTable('hmos');
  }
};