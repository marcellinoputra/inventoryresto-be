const { DataTypes } = require('sequelize');
const database = require('../database/database');

const Makanan = database.sequalize.define(
  'Makanan',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_makanan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Makanan',
  }
);

module.exports = {
  Makanan,
};
