const pg = require("pg")
pg.defaults.ssl = true
const Sequelize = require("sequelize")

// Or you can simply use a connection uri
const sequelize = new Sequelize("d8omdtlehhme65", "wmaydkrnbqjwun", "756188cc6084815dae77cd14521b99e658cff5743179774088278dc6892efa9b", {
  host: "ec2-23-21-201-255.compute-1.amazonaws.com",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

export {sequelize}



// mysql local
//
// const pg = require("pg")
// pg.defaults.ssl = true
// const Sequelize = require("sequelize")
//
// // Or you can simply use a connection uri
// const sequelize = new Sequelize("pilha", "root", "senha", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// })

// export {sequelize}
