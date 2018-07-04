
import * as express from "express"
import { Router } from "express"
import { AbstractRouter } from "./AbstractRouter"
import QuestionController from "../Controllers/QuestionController"
import Auth from "../Util/Auth"


class QuestionRouter extends AbstractRouter {

  router: Router

  constructor() {
    super()
    this.router = express.Router()
    const validate =  Auth.validate
    this.router.get("/", QuestionController.listQuestion)
    this.router.post("/create", validate, QuestionController.addQuestion)
    this.router.get("/:id", QuestionController.getQuestionId)
    this.router.post("/addAnswer/:id", validate, QuestionController.addAnswerToQuestion)
    this.router.post("/addComment/:id", validate, QuestionController.addCommentToQuestion)
  }
}

export default new QuestionRouter()
