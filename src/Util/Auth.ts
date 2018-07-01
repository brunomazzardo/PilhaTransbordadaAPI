import jwt = require("jsonwebtoken")
import { Response, Request } from "express"

import Config from "../Util/configs"

class Auth {

  constructor() { }

  validate(req: Request, res: Response, next: Function) {

    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (token) {
      jwt.verify(token, Config.secret, (err: Error) => {
        if (err) {
          return res.json({ success: false, message: "Falha ao tentar autenticar o token!" })
        } else {

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
}

export default new Auth
