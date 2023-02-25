import User from '../domain/user'
import { UserRepository } from './../domain/user.repository'

const users: User[] = [
   new User({
      name: 'Facundo',
      lastname: 'Ramirez',
      email: 'framirez089@gmail.com',
      password: 'framirez089',
      active: true,
      refreshToken: 'abc123',
   }),
   new User({
      name: 'Hector',
      lastname: 'Arteaga',
      email: 'harteaga@gmail.com',
      password: 'haarteaga123',
      active: true,
      refreshToken: 'abcd1234',
   }),
]

export default class UserInfraestructure implements UserRepository {
   list(): any {
      return users
   }

   listOne(guid: string): any {
      const user: User = Object.assign(
         {},
         users.find((el: User) => el.properties().guid === guid),
      )
      console.log('user list', user)
      return user
   }

   insert(user: User): any {
      console.log('user inserted', user)
      return user
   }

   update(user: User): any {
      console.log('user update', user)
      return user
   }

}
