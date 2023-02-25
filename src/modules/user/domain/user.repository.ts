import User, { UserProperties } from './user'

export interface UserRepository {
   // design pattern: facade: https://refactoring.guru/design-patterns/facade
   list(): UserProperties[]
   listOne(guid: string): User
   insert(user: User): UserProperties
   update(user: User): UserProperties
}
