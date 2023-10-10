require('colors');
const { Sequelize, Model, DataTypes } = require('sequelize')



const sequelize = new Sequelize('nodeFer', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432'
});

async function testConnection (){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully'.green);
  } catch(error) {
    console.error('Unable to connect to the database:'.red, error);
  }
}

testConnection();
