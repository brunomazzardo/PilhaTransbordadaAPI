import AbstractController from "./AbstractController"
import { Request, Response } from "express"
import  UserRepository  from "../Repository/UserRepository"

class UserController extends AbstractController {

  listUser = async (req: Request, res: Response) => {
    const users = await  UserRepository.listUsers()
    this.response(res, users)
  }

  createUser  = async(req: Request, res: Response) => {
    const user = await UserRepository.createUser(req.body.user)
    this.response(res, user)
  }
}




export default new UserController
