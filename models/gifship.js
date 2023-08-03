'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gifship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users,gifshiptype,gform }) {
      // define association here
      //this.hasMany(gifshiptype, {foreignKey: 'gifshipId'})
      this.belongsTo(users, {foreignKey: 'userId'})
      //this. hasMany(gform, { foreignKey: 'gifshipId'})
    }
  }
  gifship.init({
    name:{
      type:  DataTypes.STRING,
      unique:true,
      allowNull: false,
      validate:{
      notEmpty: true,
      notNull: true,
     
    }
    }
  }, {
    sequelize,
    modelName: 'gifship',
  });
  return gifship;
};