import { sequelize } from "../Util/db"
const Sequelize = require("sequelize")
const Users = sequelize.define("user", {
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





interface UserType {
  id: number
  email: string
  score: number
  name: string
}


export { Users, UserType }
