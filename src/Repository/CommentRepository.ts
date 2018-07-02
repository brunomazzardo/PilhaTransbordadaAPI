import { Question, QuestionType } from "../Model/Question"
import { Answer, AnswerType } from "../Model/Answer"
import { CommentType, Comment } from "../Model/Comment"



class CommentRepository {

  constructor() {

  }


  addCommentToAnswer = async (comment: CommentType, callback?: Function) => {
    return Comment.create(comment)
  }

  addCommentToQuestion = async (comment: CommentType, callback?: Function) => {
    return Comment.create(comment)
  }
}




export default new CommentRepository()
