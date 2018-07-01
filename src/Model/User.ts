import { sequelize } from "../Util/db"
const Sequelize = require("sequelize")
const Users = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  name: {
    type: Sequelize.STRING
  }
})


Users.sync({force: false}).then(() => {
  // Table created
  console.log("User Table Synchronized")
})


interface UserType {
  id: number
  email: string
  score: number
  name: string
}


export { Users, UserType }
