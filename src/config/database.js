module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  //host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
