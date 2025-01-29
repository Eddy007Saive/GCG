'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    
    static associate(models) {
      // Un employé peut avoir plusieurs congés
      Employee.hasMany(models.Leave, {
        foreignKey: 'employee_id',
        as: 'leaves' // alias pour l'accès aux congés d'un employé
      });


    }
  }

  Employee.init({
    nom: DataTypes.STRING,
    matricule: DataTypes.STRING,
    adresse: DataTypes.STRING,
    tel: DataTypes.STRING,
    poste: DataTypes.STRING,
    date_embauche: DataTypes.DATE,
    statut: DataTypes.STRING,
    dateN:DataTypes.DATE,
    sexe:DataTypes.STRING,
    departement:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Employee',
  });

  return Employee;
};
