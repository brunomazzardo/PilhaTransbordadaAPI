import { sequelize } from "../Util/db"
import { Users } from "./User"
import { Answer } from "./Answer"
const Sequelize = require("sequelize")
const Comment = sequelize.define("comment", {
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

Comment.belongsTo(Users)


interface CommentType {
  answerId: string
  questionId: string
  id: number
  score: number
  content: string
}


export { Comment, CommentType }
