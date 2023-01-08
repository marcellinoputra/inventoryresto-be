const { DataTypes } = require('sequelize');
const database = require('../database/database');

const Role = database.sequalize.define(
  'Role',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  }
);

module.exports = {
  Role,
};
