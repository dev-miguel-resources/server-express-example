import User from './user'

export interface UserRepository {
   // design pattern: facade: https://refactoring.guru/design-patterns/facade
   list(): User[]
   listOne(id: number): User
   insert(user: User): User
   update(user: User): User
   delete(user: User): User
}
