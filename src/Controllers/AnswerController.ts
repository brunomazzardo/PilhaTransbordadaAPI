import { Response, Request } from "express"
import  QuestionRepository  from "../Repository/QuestionRepository"
import AbstractController, { HttpStatus } from "./AbstractController"
import AnswerRepository from "../Repository/AnswerRepository"



class AnswerController extends AbstractController {

  acceptAnswer = async (req: Request, res: Response) => {
    const question = await AnswerRepository.acceptAnswer(req.params.id)
    this.response(res, question)
  }
}

export default new AnswerController
