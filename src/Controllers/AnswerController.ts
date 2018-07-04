import { Response, Request } from "express"
import  QuestionRepository  from "../Repository/QuestionRepository"
import AbstractController, { HttpStatus } from "./AbstractController"
import AnswerRepository from "../Repository/AnswerRepository"



class AnswerController extends AbstractController {

  acceptAnswer = async (req: Request, res: Response) => {
    const question = await AnswerRepository.acceptAnswer(req.params.id)
    this.response(res, question)
  }
  addComment = async  (req: Request, res: Response) => {
    const comment = await AnswerRepository.addCommentToAnswer(req.body.comment, req.params.id)
    this.response(res, comment)
  }

  upvoteAnswer = async (req: Request, res: Response) => {
    const answer = await AnswerRepository.upvoteAnswer(req.params.id)
    this.response(res, answer)
  }
  downvoteAnswer = async(req: Request, res: Response) => {
    const answer = await AnswerRepository.downvoteAnswer(req.params.id)
    this.response(res, answer)
  }
}

export default new AnswerController
