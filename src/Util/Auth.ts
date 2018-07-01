import jwt = require("jsonwebtoken")
import { Response, Request } from "express"

import Config from "../Util/configs"
import UserRepository from "../Repository/UserRepository"
import { UserType } from "../Model/User"

class Auth {


  constructor() {

  }

  validate(req: Request, res: Response, next: Function) {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]
    if (token) {
      jwt.verify(token, Config.secret, async(err: Error, token: UserType) => {
        if (err) {
          return res.json({ success: false, message: "Falha ao tentar autenticar o token!" })
        } else {
          const user = await UserRepository.getUserById(token.id)
          req.params.user  = user
          console.log("OK")
          next()
        }
      })
    } else {
      console.log("403")
      return res.status(403).send({
        success: false,
        message: "403 - Forbidden"
      })
    }
  }

  generateToken =  (user: UserType) => {
    return jwt.sign(JSON.stringify(user), Config.secret)
  }



}

export default new Auth
