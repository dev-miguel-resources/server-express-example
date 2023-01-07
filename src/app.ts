import express, { Application } from 'express'
import routerHealth from './helpers/health'
import routerUser from './modules/user/http/router'
import HandlerErrors from './helpers/errors'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
    this.mountHealthCheck()
    this.mountRoutes()
    this.mountErrors()
  }

  mountHealthCheck() {
   this.expressApp.use('/', routerHealth);
  }

  mountRoutes(): void {
   this.expressApp.use('/user', routerUser);
  }

  mountErrors(): void {
   this.expressApp.use(HandlerErrors.notFound);
  }

}

export default new App().expressApp
