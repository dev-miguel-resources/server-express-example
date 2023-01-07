import { Router } from 'express'

class UserRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
    this.mountRoutes()
  }

  mountRoutes() {
    this.expressRouter.get('/description', (req, res) => res.send('<h2>User: Pedrito</h2>'))

    this.expressRouter.get('/list', (req, res) =>
      res.json([
        { username: 'palejos', active: true },
        { username: 'jmorales', active: true },
      ]),
    )

    this.expressRouter.get('/detail', (req, res) => res.json({ username: 'palejos', active: false }))

    this.expressRouter.get('/delete', (req, res) => res.send('User deleted successfully'))
  }
}

export default new UserRouter().expressRouter;
