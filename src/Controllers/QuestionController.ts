import { Response, Request } from "express"
import  QuestionDAO  from "../QuestionDAO"
import AbstractController, { HttpStatus } from "./AbstractController"



class QuestionController extends AbstractController {


  addQuestion = async (req: Request, res: Response) => {
    console.log(req.body)
    const question = await QuestionDAO.saveQuestion(req.body.question, () => console.log(JSON.stringify(req.body.question)))
    this.response(res, question, HttpStatus.Success)
  }


  listQuestion = async (req: Request, res: Response) => {
    const list = await QuestionDAO.list()
    this.response(res, list, HttpStatus.Success)
  }


  getQuestionId = async (req: Request, res: Response) => {
    const question = await QuestionDAO.getById(req.params.id)
    res.send(question)
  }
}

export default new QuestionController
