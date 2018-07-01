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


Question.sync({force: true}).then(() => {
  // Table created
  return Question.create({
    title: "Caqui travento é bom?",
    score: 10,
    content: "Teste"
  })
})


interface QuestionType {
  id: number
  title: string
  score: number
  content: string
}


export { Question, QuestionType }
