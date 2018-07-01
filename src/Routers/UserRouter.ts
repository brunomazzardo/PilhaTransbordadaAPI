
import * as express from "express"
import UserController from "../Controllers/UserController"
import { Router } from "express"
import { AbstractRouter } from "./AbstractRouter"


class UserRouter extends AbstractRouter {

  router: Router

  constructor() {
    super()
    this.router = express.Router()

    this.router.get("/", UserController.listUser)
    this.router.post("/create", UserController.createUser)
  }
}

export default new UserRouter
