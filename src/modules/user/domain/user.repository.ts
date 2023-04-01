import User from './user'

export interface UserRepository {
   // design pattern: facade: https://refactoring.guru/design-patterns/facade
   //list(): Promise<User[]>
   //listOne(guid: string): Promise<User>
   insert(user: User): Promise<User>
   //update(user: User): Promise<User>
}
