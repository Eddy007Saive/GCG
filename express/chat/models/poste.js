'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Poste.belongsTo(models.Departement,{ foreignKey: 'departementId', as: 'departement' })
    }
  }
  Poste.init({
    nom: DataTypes.STRING,
    description: DataTypes.TEXT,
    departementId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Poste',
  });
  return Poste;
};