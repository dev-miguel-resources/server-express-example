import { Router } from 'express'
import UserApplication from '../../application/user.application'
import { UserRepository } from '../../domain/user.repository'
import UserInfraestructure from '../../infraestructure/user.infraestructure'
import UserController from './controller'

const infraestructure: UserRepository = new UserInfraestructure()
const application = new UserApplication(infraestructure)
const controller = new UserController(application)

class UserRouter {
   readonly expressRouter: Router

   constructor() {
      this.expressRouter = Router()
      this.mountRoutes()
   }

   mountRoutes() {
      // design pattern chain of responsability (middlewares): https://refactoring.guru/design-patterns/chain-of-responsibility
      this.expressRouter.get('/', controller.list)
      this.expressRouter.get('/:guid', controller.listOne)
      this.expressRouter.post('/', controller.insert)
      this.expressRouter.put('/:guid', controller.update)
      this.expressRouter.delete('/:guid', controller.delete)
      // forma 2
      /*this.expressRouter.get('/list', (req: Request, res: Response) => {
         controller.list(req, res)
      })*/
   }
}

export default new UserRouter().expressRouter
