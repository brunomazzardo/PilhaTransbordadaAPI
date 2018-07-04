import { Question, QuestionType } from "../Model/Question"
import { Answer, AnswerType } from "../Model/Answer"
import { Users } from "../Model/User"
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
    return Question.findById(id, {
      include: [
        {
          model: Answer,
          as: "correctAnswer",
          include: [{model: Users, as : "user"}]
        },
        {
          model: Answer,
          as: "answers",
          include: [{model: Users, as : "user"}, {
              model: Comment, as : "comments", include : [{model: Users, as : "user"}]
            }
          ]
        },
        {
          model: Comment, as: "comments", include: [{model: Users, as : "user"}]
        },
        {
          model : Users, as : "user"
        }
      ]
    })
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
    return question.setCorrectAnswer(answer)
  }

}




export default new QuestionRepository()
