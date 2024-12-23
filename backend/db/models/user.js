'use strict';
const { on } = require('events');
const {
  Model, Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Daily, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        hooks: true
      });

      // User.hasMany(models.Question, {
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // });

      // User.hasMany(models.Task, {
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // });

      // User.hasMany(models.Journal, {
      //   foreignKey: "userId",
      //   onDelete:"CASCADE",
      //   hooks: true
      // })

    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 40],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.");
          }
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.");
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true,
      }
    },
    gender: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["male", "female"],
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        min: 50,
        max: 500
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 13,
        max: 120
      }
    },
    activityLevel: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["sedentary", "light", "moderate", "active", "very active"],
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    }
  });
  return User;
};
