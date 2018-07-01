import { Response, Request } from "express"
import  QuestionDAO  from "../QuestionDAO"



class QuestionController {


  addQuestion = (req: Request, res: Response) => {
    QuestionDAO.saveQuestion(req.body.question, () => console.log(JSON.stringify(req.body.question)))
    res.send("success")
  }


   listQuestion = async (req: Request, res: Response) => {
    const list = await QuestionDAO.list()
    res.send(list)
  }
}

export default new QuestionController
