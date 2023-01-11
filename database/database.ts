// const { Sequelize } = require('sequelize');
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

// export default async function connectionTesting() {
//   try {
//     await sequalize.authenticate();
//     console.log('Database has been Connected');
//   } catch (err) {
//     console.log('Unable to connect to the database', err);
//   }
// }



