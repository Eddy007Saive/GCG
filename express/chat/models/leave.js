'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    static associate(models) {
      // Un congé appartient à un employé
      Leave.belongsTo(models.Employee, {
        foreignKey: 'employee_id',
        as: 'employee'
      });

      // Un congé appartient à un type de congé
      Leave.belongsTo(models.LeaveType, {
        foreignKey: 'leave_type_id',
        as: 'leaveType'
      });

      // Un congé peut avoir plusieurs approbations
      // Leave.hasMany(models.LeaveApproval, {
      //   foreignKey: 'leave_id',
      //   as: 'approvals'
      // });
    }
  }

  Leave.init({
    employee_id: DataTypes.INTEGER,
    leave_type_id: DataTypes.INTEGER,
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    jours_pris: DataTypes.INTEGER,
    motif: DataTypes.STRING,
    status: DataTypes.STRING,
    date_demande: DataTypes.DATE,
    date_approbation: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Leave',
  });

  return Leave;
};
