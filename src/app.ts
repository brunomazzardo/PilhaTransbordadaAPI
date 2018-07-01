const bodyParser = require("body-parser")
import { login } from "./Controllers/LoginController"
const cors = require("cors")
const express = require("express")
// Create Express server
const app = express()
// Express configuration
import QuestionController  from "./Controllers/QuestionController"
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


/**
 * Primary app routes.
 */

app.get("/", login )
app.get("/question/", QuestionController.listQuestion)
app.post("/question/create", QuestionController.addQuestion)
app.listen(process.env.PORT || 3000, () => console.log("Oi gente"))

