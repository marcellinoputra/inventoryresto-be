import { Sequelize } from "sequelize";

const connectionDatabase = new Sequelize({
  host: 'localhost',
  username: 'root',
  database: 'store',
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

export default connectionDatabase


