import express, { Application } from 'express'
import routerHealth from './helpers/health'
import routerUser from './modules/user/interfaces/http/router'
import HandlerErrors from './helpers/errors'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
    this.mountHealthCheck()
    this.mountMiddlewares()
    this.mountRoutes()
    this.mountErrors()
  }

  mountHealthCheck() {
    this.expressApp.use('/', routerHealth)
  }

  mountMiddlewares() {
    this.expressApp.use(express.json())
    this.expressApp.use(express.urlencoded({ extended: true }))
  }

  mountRoutes(): void {
    this.expressApp.use('/user', routerUser)
  }

  mountErrors(): void {
    this.expressApp.use(HandlerErrors.notFound)
  }
}

export default new App().expressApp
