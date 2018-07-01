
import * as express from "express"
import { Router } from "express"
import { AbstractRouter } from "./AbstractRouter"
import LoginController from "../Controllers/LoginController"


class LoginRouter extends AbstractRouter {

  router: Router

  constructor() {
    super()
    this.router = express.Router()

    this.router.post("/", LoginController.login)
  }
}

export default new LoginRouter()
