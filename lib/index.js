let sq = require('sequelize');

sequelize = new sq.Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = { DataTypes: sq.DataTypes, sequelize };
