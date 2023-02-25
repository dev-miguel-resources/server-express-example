import { v4 as uuidv4 } from 'uuid'
import { UserPasswordService } from './services/user-password.service'
import User, { UserProperties } from './user'
//import { EmailVO } from './value-objects/email.vo'

// design pattern factory: https://refactoring.guru/design-patterns/abstract-factory
export default class UserFactory {

   async create (
      name: string,
      lastname: string,
      //email: EmailVO,
      email: string,
      password: string,
   ) {

      const passwordHash = await UserPasswordService.hash(password)

      const userProperties: UserProperties = {
         name,
         lastname,
         email,
         password: passwordHash,
         guid: uuidv4(),
         refreshToken: uuidv4(),
      }

      const user = new User(userProperties)
      return user
   }
}



