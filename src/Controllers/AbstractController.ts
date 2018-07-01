import { Response } from "express"

class ResponseEntity {
  content: any
  success: Boolean
  constructor(body: any, status: HttpStatus) {
    this.content = body
    this.success = (status == HttpStatus.Success)
  }

}

export default class AbstractController {
  response = (res: Response, body: any, status?: HttpStatus) => {
     status = status ? status : HttpStatus.Success
     res.status(status).send(new ResponseEntity(body, status))
  }

}


export enum HttpStatus {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 403
}
