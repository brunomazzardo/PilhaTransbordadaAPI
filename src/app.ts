import UserController from "./Controllers/UserController"

const bodyParser = require("body-parser")
import LoginController from "./Controllers/LoginController"
const unless = require("express-unless")

// Express configuration
import QuestionController  from "./Controllers/QuestionController"
import Auth from "./Util/Auth"
import UserRouter from "./Routers/UserRouter"
import QuestionRouter from "./Routers/QuestionRouter"
import LoginRouter from "./Routers/LoginRouter"
import AnswerRouter from "./Routers/AnswerRouter"
import { sequelize } from "./Util/db"
const cors = require("cors")
const express = require("express")


// Create Express server
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


/**
 * Primary app routes.
 */

app.use("/login", LoginRouter.router)
app.use("/questions", Auth.validate, QuestionRouter.router)
app.use("/users", Auth.validate, UserRouter.router)
app.use("/answers", Auth.validate, AnswerRouter.router)

app.listen(process.env.PORT || 3000, () => console.log("Oi gente"))

