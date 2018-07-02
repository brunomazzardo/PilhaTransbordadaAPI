import { Question, QuestionType } from "../Model/Question"
import { Answer, AnswerType } from "../Model/Answer"
import { CommentType, Comment } from "../Model/Comment"
import CommentRepository from "./CommentRepository"
import QuestionRepository from "./QuestionRepository"



class AnswerRepository {

  constructor() {

   }

  saveQuestion = (answer: AnswerType, callback?: Function) => {
    return Answer.create(answer, callback)
  }

  addCommentToAnswer = async (comment: CommentType, id: string) => {
    comment.answerId = id
    return CommentRepository.addCommentToAnswer(comment)
  }

  acceptAnswer = async(id: string) => {
    const answer = await Answer.findById(id)
    return QuestionRepository.setAcceptedAnswer(answer)
  }

}




export default new AnswerRepository()
