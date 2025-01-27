'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER
      },
      leave_type_id: {
        type: Sequelize.INTEGER
      },
      date_debut: {
        type: Sequelize.DATE
      },
      date_fin: {
        type: Sequelize.DATE
      },
      jours_pris: {
        type: Sequelize.INTEGER
      },
      motif: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      date_demande: {
        type: Sequelize.DATE
      },
      date_approbation: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Leaves');
  }
};