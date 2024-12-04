'use strict';

const { allowedNodeEnvironmentFlags } = require('process');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dailies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      breakfast: {
        type: Sequelize.ARRAY
      },
      lunch: {
        type: Sequelize.ARRAY
      },
      dinner: {
        type: Sequelize.ARRAY
      },
      snack: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dailies');
  }
};
