import { Response, Request } from "express"
import AbstractController, { HttpStatus } from "./AbstractController"
import UserRepository from "../Repository/UserRepository"
import Auth from "../Util/Auth"



class LoginController extends AbstractController {


  login = async (req: Request, res: Response) => {
    const user =  await UserRepository.getUserByEmail(req.body.user.email)
    console.log(JSON.stringify(user))
    if (user)
      this.response(res, Auth.generateToken(user))
    else
      this.response(res, {}, HttpStatus.Unauthorized)
  }
}


export  default new LoginController
