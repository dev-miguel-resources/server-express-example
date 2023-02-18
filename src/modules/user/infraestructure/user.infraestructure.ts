import User from '../domain/user'
import { UserRepository } from './../domain/user.repository'

const users: User[] = [
   new User({
      id: 1,
      name: 'Facundo',
      lastname: 'Ramirez',
      email: 'framirez089@gmail.com',
      password: 'framirez089',
      active: true,
      refreshToken: 'abc123',
   }),
   new User({
      id: 2,
      name: 'Hector',
      lastname: 'Arteaga',
      email: 'harteaga@gmail.com',
      password: 'haarteaga123',
      active: true,
      refreshToken: 'abcd1234',
   }),
]

export default class UserInfraestructure implements UserRepository {
   list(): User[] {
      return users
   }

   listOne(id: number): User {
      const user: User = Object.assign(
         {},
         users.find((el: User) => el.properties().id === id),
      )
      console.log('user list', user)
      return user
   }

   insert(user: User): User {
      console.log('user inserted', user)
      return user
   }

   update(user: User): User {
      console.log('user update', user)
      return user
   }

   delete(user: User): User {
      console.log('user deleted', user)
      return user
   }
}
