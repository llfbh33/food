'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Daily.belongsTo(models.User, {
        foreignKey: "userId"
      });

    }
  }
  Daily.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    breakfast: DataTypes.ARRAY,
    lunch: DataTypes.ARRAY,
    dinner: DataTypes.ARRAY,
    snack: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Daily',
  });
  return Daily;
};
