'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('gifships', [{
       name: 'Formal Sector Social Health Insurance Programmes (FSSHIP)',
       userId: '1',
       
     },{
       name: 'Informal Sector Social Health Insurance Programmes (ISSHIP)',
       userId: '1',
     },{
       name: 'Vulnerable Group Social Health Programmes (VSSHP)',
       userId: '1',
     }
     
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     **/ 
     await queryInterface.bulkDelete('gifships', null, {});
     
  }
};
