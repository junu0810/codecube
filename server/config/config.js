require('dotenv').config()

module.exports = {
  development: {
    username: process.env.RDS_DATABASE_USERNAME,
    password: process.env.RDS_DATABASE_PASSWORD,
    database: process.env.RDS_DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    // port: process.env.RDS_DATABASE_PORT,
  },
  test: {
    username: process.env.RDS_DATABASE_USERNAME,
    password: process.env.RDS_DATABASE_PASSWORD,
    database: process.env.RDS_DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    // port: process.env.RDS_DATABASE_PORT,
  },
  production: {
    username: process.env.RDS_DATABASE_USERNAME,
    password: process.env.RDS_DATABASE_PASSWORD,
    database: process.env.RDS_DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    // port: process.env.RDS_DATABASE_PORT,
  },
}
