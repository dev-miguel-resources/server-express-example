import User, { UserProperties } from './../../domain/user'
import { Request, Response } from 'express'
import UserApplication from '../../application/user.application'
import UserFactory from '../../domain/user-factory'
import { EmailVO } from '../../domain/value-objects/email.vo'
import { UserInsertMapping } from './dto/response/user-insert.dto'
import { UserListOneMapping } from './dto/response/user-list-one.dto'
import { UserListDTO } from './dto/response/user-list.dto'

export default class {
   constructor(private application: UserApplication) {
      // design pattern: links of methods or mediator: https://refactoring.guru/design-patterns/mediator
      // forma 1
      this.list = this.list.bind(this)
      this.listOne = this.listOne.bind(this)
      //this.insert = this.insert.bind(this)
      //this.update = this.update.bind(this)
      //this.delete = this.delete.bind(this)
   }

   list(req: Request, res: Response) {
      const list = this.application.list()
      res.json(list)
   }

   listOne(req: Request, res: Response) {
      //const user = this.application.listOne(guid)
      //res.json(user)
   }

   /*insert(req: Request, res: Response) {
      const properties: UserProperties = {
         name: 'Jesus',
         lastname: 'Rico',
         email: 'jrico@gmail.com',
         password: 'jrico123',
         refreshToken: 'jrico123abcdef',
      }

      const user: User = new User(properties)
      const userInsert = this.application.insert(user)
      res.json(userInsert)
   }

   update(req: Request, res: Response) {
      const properties: UserProperties = {
         name: 'Jesus',
         lastname: 'Gonzalez',
         email: 'jrico@gmail.com',
         password: 'jrico123456',
         refreshToken: 'jrico123abcdef',
      }

      const user: User = new User(properties)
      const userUpdate = this.application.update(user)
      res.json(userUpdate)
   }

   delete(req: Request, res: Response) {
      const properties: UserProperties = {
         name: 'Jesus',
         lastname: 'Gonzalez',
         email: 'jrico@gmail.com',
         password: 'jrico123456',
         refreshToken: 'jrico123abcdef',
      }

      const user: User = new User(properties)
      //const userDelete = this.application.delete(user)
      //res.json(userDelete)
   }*/
}
