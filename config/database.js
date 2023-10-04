exports.databases = {
  default: "mysql",
  connections: {
    mysql: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_CONNECTION,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    mssql: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_CONNECTION,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    sqlite: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_CONNECTION,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
};
