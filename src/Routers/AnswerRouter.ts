
import * as express from "express"
import { Router } from "express"
import { AbstractRouter } from "./AbstractRouter"
import AnswerController from "../Controllers/AnswerController"


class AnswerRouter extends AbstractRouter {

  router: Router

  constructor() {
    super()
    this.router = express.Router()

    this.router.get("/accept/:id", AnswerController.acceptAnswer)
  }
}

export default new AnswerRouter()
