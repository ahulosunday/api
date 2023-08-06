'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
 
    await queryInterface.bulkInsert('role_permissions', [
      { id: 1,
         
     roleId: 1,
     permissionId: 1,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 2,
     roleId: 1,
     permissionId: 2,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 3,
     roleId: 1,
     permissionId: 3,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 4,
     roleId: 1,
     permissionId: 4,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 5,
     roleId: 1,
     permissionId: 5,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
   { id: 6,
     roleId: 1,
     permissionId: 6,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 7,
     roleId: 1,
     permissionId: 7,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 8,
     roleId: 1,
     permissionId: 8,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    }
    ,
    { id: 9,
     roleId: 1,
     permissionId: 9,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    }
    ,
    { id: 10,
     roleId: 1,
     permissionId: 10,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 11,
     roleId: 1,
     permissionId: 11,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 12,
     roleId: 1,
     permissionId: 12,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 13,
     roleId: 1,
     permissionId: 13,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 14,
     roleId: 1,
     permissionId: 14,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    }
    ,{ id: 15,
     roleId: 1,
     permissionId: 15,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 16,
     roleId: 1,
     permissionId: 16,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 17,
     roleId: 1,
     permissionId: 17,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 18,
     roleId: 1,
     permissionId: 18,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 19,
     roleId: 1,
     permissionId: 19,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    },
    { id: 20,
     roleId: 1,
     permissionId: 20,
      createdAt: '2023-07-31 06:51:23',
       updatedAt: '2023-07-31 06:51:23'
    }
    
    ], {});

  },

  async down (queryInterface, DataTypes) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     **/ 
     await queryInterface.bulkDelete('role_permissions', null, {});
     
  }
};
