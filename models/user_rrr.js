'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_rrr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({gifship, users, gifshiptype, gifshipPackage}) {
    this.belongsTo(users, {foreignKey: 'userId'})
      this.belongsTo(gifship, {foreignKey: 'gifshipId'})
      this.belongsTo(gifshiptype, {foreignKey: 'gifshipTypeId'})
      this.belongsTo(gifshipPackage, {foreignKey: 'gifshipPackageId'})
    }
  }
  user_rrr.init({
    rrr_number:
    { 
      type: DataTypes.STRING,
       allowNull: false,
        unique: true,
        validate:{
          notEmpty: true,
          notNull:true,
          
        }
        },
    userId: { 
      type: DataTypes.INTEGER,
       allowNull: false,
      
        },
    activated: { 
      type: DataTypes.INTEGER,
       allowNull: false,
       
        },
        activated_date:{
type:DataTypes.DATE,
allowNull: false,
defaultValue: DataTypes.DATE,
validate:{
  notEmpty:true,
  notNull:true,
  
}
      },
    activatedby:{ 
      type: DataTypes.INTEGER,
       allowNull: false,
       
        },
    amount: { 
      type: DataTypes.FLOAT,
       allowNull: false,
       validate:{
        notEmpty:true,
        notNull:true,
       
       }
        },
        duration:{
      type: DataTypes.INTEGER,
    defaultValue:0,
      },
   gifshipId:{
        type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      },
       gifshipTypeId: {
        type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      },
       gifshipPackageId: {
        type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      },
      expired_date:{
type:DataTypes.DATE,
allowNull: false,
defaultValue: DataTypes.DATE
      },
  }, {
    sequelize,
    modelName: 'user_rrr',
  });
  return user_rrr;
};