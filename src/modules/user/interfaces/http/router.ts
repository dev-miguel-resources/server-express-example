import { Router, Request, Response } from 'express'
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
      // design pattern chain of responsability: https://refactoring.guru/design-patterns/chain-of-responsibility
      // forma 1
      //this.expressRouter.get('/list', controller.list)

      // forma 2
      this.expressRouter.get('/list', (req: Request, res: Response) => {
         controller.list(req, res)
      })

      this.expressRouter.get('/list/:id', (req: Request, res: Response) => {
         controller.listOne(req, res)
      })

      this.expressRouter.get('/insert', (req: Request, res: Response) => {
         controller.insert(req, res)
      })

      this.expressRouter.get('/update', (req: Request, res: Response) => {
         controller.update(req, res)
      })

      this.expressRouter.get('/delete', (req: Request, res: Response) => {
         controller.delete(req, res)
      })

      /*this.expressRouter.get('/description', (req, res) => res.send('<h2>User: Pedrito</h2>'))

    this.expressRouter.get('/list', (req, res) =>
      res.json([
        { username: 'palejos', active: true },
        { username: 'jmorales', active: true },
      ]),
    )

    this.expressRouter.get('/detail', (req, res) => res.json({ username: 'palejos', active: false }))

    this.expressRouter.get('/delete', (req, res) => res.send('User deleted successfully'))*/
   }
}

export default new UserRouter().expressRouter
