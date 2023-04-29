import { Result } from 'neverthrow'
import User, { UserUpdate } from './user'
import { UserNotFoundException } from './exceptions/user.exception'

export interface UserRepository {
  // design pattern: facade: https://refactoring.guru/design-patterns/facade
  list(): Promise<User[]>
  listOne(guid: string): Promise<Result<User, UserNotFoundException>>
  insert(user: User): Promise<User>
  update(guid: string, user: Partial<UserUpdate>): Promise<Result<User, UserNotFoundException>>
  //delete(guid: string): Promise<Result<User, UserNotFoundException>>
}
