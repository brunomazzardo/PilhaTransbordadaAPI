import { Question, QuestionType } from "../Model/Question"



class QuestionRepository {

  constructor() {
  }

  saveQuestion = (question: QuestionType, callback: Function) => {
    console.log(JSON.stringify(question))
    return Question.create(question, callback)
  }

  list = () => {
    return Question.findAll()
  }

  getById = (id: number) => {
    return Question.findById(id)
  }
}




export default new QuestionRepository()
