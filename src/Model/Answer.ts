import { sequelize } from "../Util/db"
import { Users } from "./User"
import { Comment } from "./Comment"

const Sequelize = require("sequelize")
const Answer = sequelize.define("answer", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  content: {
    type: Sequelize.JSON
  }
})

Answer.belongsTo(Users, {as : "user"})
Answer.hasMany(Comment, {as: "comments"})


interface AnswerType {
  userId: any
  questionId: string
  id: string
  score: number
  content: string
}


export { Answer, AnswerType }
