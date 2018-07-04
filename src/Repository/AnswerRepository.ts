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


  getById = (id: string) => {
    return Answer.findById(id)
  }


  upvoteAnswer = async (id: string) => {
    const answer = await this.getById(id)
    answer.score += 1
    return answer.save()
  }

  downvoteAnswer = async (id: string) => {
    const answer = await this.getById(id)
    answer.score -= 1
    return answer.save()
  }
}




export default new AnswerRepository()
