const config = {
  development: {
    username: "root",
    password: "zxcvbnm",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "zxcvbnm",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "zxcvbnm",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};

module.exports = config;
