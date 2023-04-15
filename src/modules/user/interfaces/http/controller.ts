import { Request, Response, NextFunction } from 'express'
import UserApplication from '../../application/user.application'
import UserFactory from '../../domain/user-factory'
import { EmailVO } from '../../domain/value-objects/email.vo'
import { UserInsertMapping } from './dto/response/user-insert.dto'
import { IError } from '../helper/ierror'
//import { UserListOneMapping } from './dto/response/user-list-one.dto'
//import { UserListMapping } from './dto/response/user-list.dto'
//import { UserListDTO } from './dto/response/user-list.dto'

export default class {
  constructor(private application: UserApplication) {
    // design pattern: links of methods or mediator: https://refactoring.guru/design-patterns/mediator
    // forma 1
    //this.list = this.list.bind(this)
    //this.listOne = this.listOne.bind(this)
    this.insert = this.insert.bind(this)
    //this.update = this.update.bind(this)
    //this.delete = this.delete.bind(this)
  }

  /*list(_req: Request, res: Response) {
    const list = this.application.list()
    const result: UserListDTO = new UserListMapping().execute(list)
    res.json(result)
  }

  listOne(req: Request, res: Response) {
    const { guid } = req.params
    const data = this.application.listOne(guid).properties()
    const result = new UserListOneMapping().execute(data)
    res.json(result)
  }*/

  async insert(req: Request, res: Response, next: NextFunction) {
    const { name, lastname, email, password } = req.body
    const emailResult = EmailVO.create(email)
    if (emailResult.isErr()) {
      const err: IError = new Error(emailResult.error.message)
      err.status = 411
      return next(err)
    }
    const userResult = await new UserFactory().create(name, lastname, emailResult.value, password)

    if (userResult.isErr()) {
      const err: IError = new Error(userResult.error.message)
      err.status = 411
      return next(err)
    } else {
      const data = await this.application.insert(userResult.value)
      const result = new UserInsertMapping().execute(data.properties())
      res.json(result)
    }
  }

  /*update(req: Request, res: Response) {
    const { guid } = req.params
    const { name, lastname, email, password } = req.body
    const user = this.application.listOne(guid)
    user.update({ name, lastname, email: EmailVO.create(email), password })
    const result = this.application.update(user)
    res.json(result)
  }

  delete(req: Request, res: Response) {
    const { guid } = req.params
    const user = this.application.listOne(guid)
    user.delete()
    const result = this.application.update(user)
    res.json(result)
  }*/
}
