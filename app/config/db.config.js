module.exports = {
  HOST: "localhost",
  USER: "mariebouquin",
  PASSWORD: "Digit@l111",
  DB: "node_postgres_crud",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
