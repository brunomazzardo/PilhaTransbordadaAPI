import { Response, Request } from "express"
import  QuestionRepository  from "../Repository/QuestionRepository"
import AbstractController, { HttpStatus } from "./AbstractController"
import { QuestionType } from "../Model/Question"
import { AnswerType } from "../Model/Answer"



class QuestionController extends AbstractController {


  addQuestion = async (req: Request, res: Response) => {
    const questionBody = req.body.question
    questionBody.userId = req.params.user.id
    console.log(req.body)
    const question = await QuestionRepository.saveQuestion(questionBody, () => console.log(JSON.stringify(req.body.question)))
    this.response(res, question)
  }


  listQuestion = async (req: Request, res: Response) => {
    const list = await QuestionRepository.list()
    this.response(res, list)
  }


  getQuestionId = async (req: Request, res: Response) => {
    const question = await QuestionRepository.getById(req.params.id)
    if (question.correctAnswer != undefined) {
       question.setAnswers(question.answers.filter((answer: AnswerType) => {
          return answer.id !== question.correctAnswerId
        }))
    }
    console.log(JSON.stringify(question.answers))
    this.response(res, question)
  }

  addAnswerToQuestion = async (req: Request, res: Response) => {
    const answer: AnswerType = req.body.answer
    answer.userId = req.params.user.id
    const question = await QuestionRepository.addAnswerToQuestion(answer, req.params.id)
    this.response(res, question)
  }

  addCommentToQuestion = async (req: Request, res: Response) => {
    const comment  = req.body.question
    comment.userId = req.params.user.id
    const question = await QuestionRepository.addCommentToQuestion(req.body.comment, req.params.id)
    this.response(res, question)
  }

  upVoteQuestion = async (req: Request, res: Response) => {
    const question = await QuestionRepository.upvoteQuestion(req.params.id)
    this.response(res, question)
  }
  downvoteQuestion = async(req: Request, res: Response) => {
    const question = await QuestionRepository.downvoteQuestion(req.params.id)
    this.response(res, question)
  }


}

export default new QuestionController
