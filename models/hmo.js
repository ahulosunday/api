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
    static associate({users,country, states, regions, lga, ward}) {
      // define association here
      this.belongsTo(users, {foreignKey: 'userId'})
      this.belongsTo(country, {foreignKey: 'countryId'})
      this.belongsTo(regions, {foreignKey: 'regionId'})
      this.belongsTo(states, {foreignKey: 'stateId'})
      this.belongsTo(lga, {foreignKey: 'lgaId'})
      this.belongsTo(ward, {foreignKey: 'wardId'})
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
    address: { 
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
      
      validate:{
        notEmpty: true,
        notNull: true,
      }

    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: true,
        notNull: true,
      }

    },
      types: { 
      type: DataTypes.INTEGER,
      allowNull: true
    },
        countryId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
       
        notNull: true
        
      },
      references:{
        model: 'countries',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',

    
    },
    regionId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      },
      references:{
        model: 'regions',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',

    
    },
    stateId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
      notEmpty:true,
        notNull:true
      },
      references:{
        model: 'states',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',

    
    },
    lgaId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
      notEmpty:true,
        notNull:true
      },
      references:{
        model: 'lgas',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',

    
    },
    wardId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
      notEmpty:true,
        notNull:true
      },
      references:{
        model: 'wards',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    
    },

    userId:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
      },
      references:{
        model: 'users',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
      

    }
  }, {
    sequelize,
    modelName: 'hmo',
  });
  return hmo;
};