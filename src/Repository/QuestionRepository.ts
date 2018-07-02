import { Question, QuestionType } from "../Model/Question"
import { Answer, AnswerType } from "../Model/Answer"
import { CommentType, Comment } from "../Model/Comment"
import AnswerRepository from "./AnswerRepository"
import CommentRepository from "./CommentRepository"



class QuestionRepository {


  constructor() {
  }

  saveQuestion = (question: QuestionType, callback: Function) => {
    console.log(JSON.stringify(question))
    return Question.create(question, callback)
  }

  list = () => {
    return Question.findAll({ include: [{ all: true }]})
  }

  getById = (id: string) => {
    return Question.findById(id, { include: [{ all: true }]})
  }

  addAnswerToQuestion = async (answer: AnswerType, id: string) => {
    answer.questionId = id
    return AnswerRepository.saveQuestion(answer)
  }

  addCommentToQuestion = async (comment: CommentType, id: string) => {
    comment.questionId = id
    return CommentRepository.addCommentToQuestion(comment)
  }

  setAcceptedAnswer = async (answer: AnswerType) => {
    const question =  await this.getById(answer.questionId)
    return question.setRightAnswer(answer)
  }

}




export default new QuestionRepository()
