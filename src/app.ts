const bodyParser = require("body-parser")
const unless = require("express-unless")

// Express configuration
import UserRouter from "./Routers/UserRouter"
import QuestionRouter from "./Routers/QuestionRouter"
import LoginRouter from "./Routers/LoginRouter"
import AnswerRouter from "./Routers/AnswerRouter"
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
app.use("/questions" , QuestionRouter.router)
app.use("/users", UserRouter.router)
app.use("/answers",  AnswerRouter.router)

app.listen(process.env.PORT || 3000, () => console.log("Oi gente"))

