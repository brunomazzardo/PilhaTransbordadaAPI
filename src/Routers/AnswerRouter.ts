
import * as express from "express"
import { Router } from "express"
import { AbstractRouter } from "./AbstractRouter"
import AnswerController from "../Controllers/AnswerController"
import Auth from "../Util/Auth"
import QuestionController from "../Controllers/QuestionController"


class AnswerRouter extends AbstractRouter {

  router: Router

  constructor() {
    super()
    this.router = express.Router()
    const validate =  Auth.validate
    this.router.get("/accept/:id", validate, AnswerController.acceptAnswer)
    this.router.post("/addComent/:id", validate, AnswerController.addComment)
    this.router.get("/upvote/:id", validate, AnswerController.upvoteAnswer)
    this.router.get("/downvote/:id", validate, AnswerController.downvoteAnswer)
  }
}

export default new AnswerRouter()
