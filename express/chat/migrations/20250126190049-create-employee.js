'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
      },
      matricule: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      poste: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexe: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateN: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      date_embauche: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      statut: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('Employees');
  }
};