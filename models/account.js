'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users, account_type}) {
     
     this.belongsTo(users, {foreignKey: 'userId'});
     this.belongsTo(account_type, {foreignKey: 'accounttypeId'});
     
    }
  }
  account.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      },
    accounttypeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    sub: DataTypes.INTEGER,
    table_name: DataTypes.STRING,
    table_id: DataTypes.INTEGER,
    account_code: DataTypes.STRING,
    d_created: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'account',
  });
  return account;
};