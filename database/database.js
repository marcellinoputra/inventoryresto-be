const { Sequelize } = require('sequelize');

const sequalize = new Sequelize({
  host: 'localhost',
  username: 'root',
  database: 'store',
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

async function connectionTesting() {
  try {
    await sequalize.authenticate();
    console.log('Database has been Connected');
  } catch (err) {
    console.log('Unable to connect to the database', err);
  }
}

module.exports = {
  sequalize,
  connectionTesting,
};
