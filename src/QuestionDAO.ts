import { Question, QuestionType } from "./Model/Question"



class QuestionDAO {

  constructor() {
  }

  saveQuestion = (question: QuestionType, callback: Function) => {
    console.log(JSON.stringify(question))
   return Question.create(question, callback)
  }

  list = () => {
    return Question.findAll()
  }
}




export default new QuestionDAO()
