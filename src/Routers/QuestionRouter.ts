
import * as express from "express"
import { Router } from "express"
import { AbstractRouter } from "./AbstractRouter"
import QuestionController from "../Controllers/QuestionController"


class QuestionRouter extends AbstractRouter {

  router: Router

  constructor() {
    super()
    this.router = express.Router()

    this.router.get("/", QuestionController.listQuestion)
    this.router.post("/create", QuestionController.addQuestion)
    this.router.get("/:id", QuestionController.getQuestionId)
  }
}

export default new QuestionRouter()
