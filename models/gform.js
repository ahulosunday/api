'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate({country, states, users, regions, hospital, lga, gifship, gifshiptype, gifshipPackage, hmo}) {
      // define association here
      this.belongsTo(states,{ foreignKey: 'stateOrigin'})
      this.belongsTo(country,{ foreignKey: 'countryOrigin'})
      this.belongsTo(users,{ foreignKey: 'userId'})
      this.belongsTo(regions,{ foreignKey: 'regionOrigin'})
      this.belongsTo(hospital,{foreignKey: 'hospitalId'}) 
      this.belongsTo(lga,{foreignKey: 'lgaOrigin'}) 
      this.belongsTo(gifship,{foreignKey: 'gifshipId'}) 
      this.belongsTo(gifshiptype,{foreignKey: 'gifshipTypeId'}) 
      this.belongsTo(gifshipPackage,{foreignKey: 'gifshipPackageId'}) 
      this.belongsTo(hmo, {foreignKey: 'hmoId'}) 
      this.belongsTo(states,{foreignKey: 'regiteredState'}) 
      
    }
  }
  gform.init({
     idCode:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    middlename: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    marital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate:{
        notEmpty: true,
        notNull: true,
      
      }
      
      },
      address:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: true,
           
      },
    countryOrigin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    regionOrigin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    stateOrigin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    lgaOrigin:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
      wardOrigin:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    
    regiteredCountry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    regiteredRegion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    regiteredState:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    regiteredLga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
      registeredWard:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    residentCountry:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    residentRegion:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    residentState: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    residentLga:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
      residentWard:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    gifshipId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    gifshipTypeId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
      gifshipPackageId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      },
    nin:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: true,
        notNull: true,
        len:{
          args:[11,11],
          msg: 'Invalid NIN Number'
        }
      }
      
      },
    hospitalId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    hmoId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      },
    userId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
      validate:{
        notEmpty: true,
        notNull: true,
      }
      
      }
  }, {
    sequelize,
    modelName: 'gform',
  });
  return gform;
};