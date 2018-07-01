import { Response, Request } from "express"
import  QuestionDAO  from "../QuestionDAO"



class QuestionController {


  addQuestion = async (req: Request, res: Response) => {
    console.log(req.body)
    const question = await QuestionDAO.saveQuestion(req.body.question, () => console.log(JSON.stringify(req.body.question)))
    res.send(question)
  }


   listQuestion = async (req: Request, res: Response) => {
    const list = await QuestionDAO.list()
    res.send(list)
  }
}

export default new QuestionController
