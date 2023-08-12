const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeIndex(hospitals_bank_accnumbers) => "role_permissions"
 * addIndex(role_permissions_role_id_permission_id) => "role_permissions"
 *
 */

const info = {
  revision: 2,
  name: "updateRole_permission",
  created: "2023-08-10T03:54:43.762Z",
  comment: "",
};

const migrationCommands = (transaction) => [

  {
    fn: "addIndex",
    params: [
      "role_permissions",
      ["roleId", "permissionId"],
      {
        indexName: "role_permissions_role_id_permission_id",
        name: "role_permissions_role_id_permission_id",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeIndex",
    params: [
      "role_permissions",
      "role_permissions_role_id_permission_id",
      { transaction },
    ],
  },
  {
    fn: "addIndex",
    params: [
      "role_permissions",
      ["roleId", "permissionId"],
      {
        indexName: "hospitals_bank_accnumbers",
        name: "hospitals_bank_accnumbers",
        indicesType: "UNIQUE",
        type: "UNIQUE",
        transaction,
      },
    ],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
