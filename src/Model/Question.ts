import { sequelize } from "../Util/db"
const Sequelize = require("sequelize")
const Question = sequelize.define("Question", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER
  },
  content: {
    type: Sequelize.JSONB
  }
})

