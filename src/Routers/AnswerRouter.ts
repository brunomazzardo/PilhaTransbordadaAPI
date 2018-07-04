
import * as express from "express"
import { Router } from "express"
import { AbstractRouter } from "./AbstractRouter"
import AnswerController from "../Controllers/AnswerController"
import Auth from "../Util/Auth"


class AnswerRouter extends AbstractRouter {

  router: Router

  constructor() {
    super()
    this.router = express.Router()
    const validate =  Auth.validate
    this.router.get("/accept/:id", validate, AnswerController.acceptAnswer)
  }
}

export default new AnswerRouter()
