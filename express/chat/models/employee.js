'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un employé peut avoir plusieurs congés
      Employee.hasMany(models.Leave, {
        foreignKey: 'employee_id',
        as: 'leaves' // alias pour l'accès aux congés d'un employé
      });

      // // Un employé peut avoir plusieurs soldes de congé
      // Employee.hasMany(models.LeaveBalance, {
      //   foreignKey: 'employee_id',
      //   as: 'leaveBalances' // alias pour l'accès aux soldes de congé d'un employé
      // });

      // // Un employé peut avoir plusieurs approbations de congé (comme approbateur)
      // Employee.hasMany(models.LeaveApproval, {
      //   foreignKey: 'approbateur_id',
      //   as: 'approvals' // alias pour l'accès aux approbations d'un employé
      // });

    }
  }

  Employee.init({
    nom: DataTypes.STRING,
    matricule: DataTypes.STRING,
    adresse: DataTypes.STRING,
    tel: DataTypes.STRING,
    poste: DataTypes.STRING,
    date_embauche: DataTypes.DATE,
    statut: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });

  return Employee;
};
