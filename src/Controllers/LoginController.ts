import { Response, Request } from "express"



const login = (req: Request, res: Response) => {
   res.send("Hello World!")
 }


export  { login }
