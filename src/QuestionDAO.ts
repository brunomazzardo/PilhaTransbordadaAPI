import { Question, QuestionType } from "./Model/Question"



class QuestionDAO {

  constructor() {
  }

  saveQuestion = (question: QuestionType, callback: Function) => {
    Question.create(question, callback)
  }

  list = () => {
    return Question.findAll()
  }
}




export default new QuestionDAO()
