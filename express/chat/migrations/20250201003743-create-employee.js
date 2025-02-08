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
        unique: true,
        allowNull: false,
      },
      matricule: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      adresse: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      sexe: {
        type: Sequelize.ENUM('Homme', 'Femme'),
        allowNull: false,
      },
      dateN: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      date_embauche: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      statut: {
        type: Sequelize.ENUM('Actif', 'Inactif'),
        allowNull: false,
      },
      leave_solde: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
      },
      posteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Postes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};
