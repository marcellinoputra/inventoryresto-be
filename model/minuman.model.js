const { DataTypes } = require('sequelize');
const database = require('../database/database');

const Minuman = database.sequalize.define(
  'Minuman',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_minuman: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'minuman',
  }
);

module.exports = {
  Minuman,
};
