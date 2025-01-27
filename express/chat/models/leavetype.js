'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LeaveType.hasMany(models.Leave, {
        foreignKey: 'leave_type_id',
        as: 'leaves'
      });
    }
  }
  LeaveType.init({
    nom: DataTypes.STRING,
    description: DataTypes.STRING,
    jours_max: DataTypes.INTEGER,
    actif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'LeaveType',
  });
  return LeaveType;
};