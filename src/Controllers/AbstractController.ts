import { Response } from "express"

class ResponseEntity {

  content: any
  status: HttpStatus
  constructor(body: any, status: HttpStatus) {
    this.content = body
    this.status = status
  }

}

export default class AbstractController {


  response = (res: Response, body: any, status: HttpStatus) => {
    res.send(new ResponseEntity(body, status))
  }


}


export enum HttpStatus {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 403
}
