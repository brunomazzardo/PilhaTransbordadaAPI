import { Users, UserType } from "../Model/User"

class UserRepository {
  listUsers = () => {
    return Users.findAll()
  }

  createUser = (user: UserType) => {
    return Users.create(user)
 }

  getUserById = (id: number) => {
    return Users.findById(id)
  }

  getUserByEmail = (email: string) => {
    return Users.findOne({where: {email: email}})
  }
}


export default new UserRepository()
