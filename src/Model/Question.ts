import { sequelize } from "../Util/db"
import { Users } from "./User"
import { Answer } from "./Answer"
import { Comment } from "./Comment"
const Sequelize = require("sequelize")
const Question = sequelize.define("question", {
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
    type: Sequelize.JSON
  }
})

Question.belongsTo(Users)
Question.hasMany(Answer, {as: "Answers", constraints: false})
Question.belongsTo(Answer, {as: "RightAnswer"})
Question.hasMany(Comment, {as: "Comments"})
sequelize.sync({
  force: false
})



interface QuestionType {
  id: number
  title: string
  score: number
  content: string
}


export { Question, QuestionType }
