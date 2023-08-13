'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('hmos', 'address', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false

        }, { transaction: t }),
        queryInterface.addColumn('hmos', 'phone', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        }, { transaction: t }),
         queryInterface.addColumn('hmos', 'email', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        }, { transaction: t }),
         queryInterface.addColumn('hmos', 'countryId', {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
        model: 'countries',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
        }, { transaction: t }),
         queryInterface.addColumn('hmos', 'regionId', {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
        model: 'regions',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
        }, { transaction: t }),
         queryInterface.addColumn('hmos', 'stateId', {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
        model: 'states',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
        }, { transaction: t }),
         queryInterface.addColumn('hmos', 'lgaId', {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
        model: 'lgas',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
        }, { transaction: t }),
         queryInterface.addColumn('hmos', 'wardId', {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references:{
        model: 'wards',
        key: 'id',
        
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('hmos', 'address', { transaction: t }),
        queryInterface.removeColumn('hmos', 'phone', { transaction: t }),
        queryInterface.removeColumn('hmos', 'email', { transaction: t }),
        queryInterface.removeColumn('hmos', 'countryId', { transaction: t }),
         queryInterface.removeColumn('hmos', 'regionId', { transaction: t }),
          queryInterface.removeColumn('hmos', 'stateId', { transaction: t }),
           queryInterface.removeColumn('hmos', 'lgaId', { transaction: t }),
            queryInterface.removeColumn('hmos', 'wardId', { transaction: t }),
      ]);
    });
  }
};
