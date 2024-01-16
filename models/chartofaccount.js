'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chartofaccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users}) {
      this.belongsTo(users, {foreignKey: 'userId'})
      // define association here
    }
  }
  chartofaccount.init({
    accountcode: DataTypes.STRING,
    linecode: DataTypes.STRING,
    name: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    levelcode: DataTypes.STRING,
    isparent: DataTypes.STRING,
    inuse: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chartofaccount',
  });
  return chartofaccount;
};