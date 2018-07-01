
import { Response } from "express"
const bodyParser = require("body-parser")
import { login } from "./Routes/LoginRoute"
const express = require("express")
// Create Express server
const app = express()
import  Auth  from "./Util/Auth"
import { sequelize } from "./db"
// Express configuration

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(Auth.validate)


/**
 * Primary app routes.
 */
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch((err: Error) => {
    console.error("Unable to connect to the database:", err)
  })
app.get("/", login )

app.listen(process.env.PORT || 3000, () => console.log("Oi gente"))

