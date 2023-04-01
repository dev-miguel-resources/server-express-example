import User from '../domain/user'
import { UserRepository } from './../domain/user.repository'
import { UserEntity } from './user.entity'
import DatabaseBootstrap from '../../../bootstrap/database.bootstrap'

export default class UserInfraestructure implements UserRepository {
  /*list(): UserProperties[] {
    return users.filter((el: User) => el.properties().active).map((el: User) => el.properties())
  }*/

  /*listOne(guid: string): User {
    return users.filter((el: User) => el.properties().active).find((el: User) => el.properties().guid === guid)
  }*/

  async insert(user: User): Promise<User> {
    const userInsert = new UserEntity()

    const { guid, name, lastname, email, password, refreshToken, active } = user.properties()
    Object.assign(userInsert, {
      guid,
      name,
      lastname,
      email: email,
      password,
      refreshToken,
      active,
    })

    await DatabaseBootstrap.dataSource.getRepository(UserEntity).save(userInsert)

    return user
  }

  /*update(user: User): User {
    const { guid } = user.properties()
    const userIndex: number = users.findIndex((el: User) => el.properties().guid === guid)
    users[userIndex] = user
    return user
  }*/
}
