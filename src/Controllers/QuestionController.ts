import { Response, Request } from "express"
import  QuestionRepository  from "../Repository/QuestionRepository"
import AbstractController, { HttpStatus } from "./AbstractController"



class QuestionController extends AbstractController {


  addQuestion = async (req: Request, res: Response) => {
    console.log(req.body)
    const question = await QuestionRepository.saveQuestion(req.body.question, () => console.log(JSON.stringify(req.body.question)))
    this.response(res, question)
  }


  listQuestion = async (req: Request, res: Response) => {
    const list = await QuestionRepository.list()
    this.response(res, list)
  }


  getQuestionId = async (req: Request, res: Response) => {
    const question = await QuestionRepository.getById(req.params.id)
    this.response(res, question)
  }

  addAnswerToQuestion = async (req: Request, res: Response) => {
    const question = await QuestionRepository.addAnswerToQuestion(req.body.answer, req.params.id)
    this.response(res, question)
  }
}

export default new QuestionController
