
import { Response } from "express"
const bodyParser = require("body-parser")
import { login } from "./Routes/LoginRoute"
const express = require("express")
// Create Express server
const app = express()
import  Auth  from "./Util/Auth"
// Express configuration

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Primary app routes.
 */
app.get("/", login )
app.use(Auth.validate)

app.listen(3000, () => console.log("Oi gente"))

