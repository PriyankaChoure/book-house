const config = {
  user: "testuser", // sql user
  password: "testuser", //sql user password
  server: "192.168.29.2", // if it does not work try- localhost
  database: "book-house",
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    encrypt: false,
    instancename: "MSSQLSERVER", // SQL Server instance name
  },
  port: 1433,
};

module.exports = config;
