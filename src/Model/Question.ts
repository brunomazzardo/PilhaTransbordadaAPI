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
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  content: {
    type: Sequelize.JSONB
  }
})


Question.sync({force: false}).then(() => {
  // Table created
  console.log("Question Table Synchronized")
})


interface QuestionType {
  id: number
  title: string
  score: number
  content: string
}


export { Question, QuestionType }
