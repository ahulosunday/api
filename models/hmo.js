'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hmo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users}) {
      // define association here
      this.belongsTo(users, {foreignKey: 'userId'})
    }
  }
  hmo.init({
    name:{ 
      type: DataTypes.STRING,
      allowNull: false,

      validate:{
        notEmpty: true,
        notNull: true,
      }

    },
    code: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: true,
        notNull: true,
      }

    },
    userId:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      

    }
  }, {
    sequelize,
    modelName: 'hmo',
  });
  return hmo;
};