"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      GRANT SELECT, INSERT, UPDATE ON ticketing.* TO 'user'@'%';
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      REVOKE ALL PRIVILEGES ON ticketing.* FROM 'user'@'%';
    `);
  },
};
