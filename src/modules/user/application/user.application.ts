import User from '../domain/user'
import { UserUpdate } from '../domain/types/userUpdate.type'
import { UserRepository } from '../domain/user.repository'

export default class UserApplication {
   constructor(private readonly userRepository: UserRepository) {}

   list() {
      return this.userRepository.list()
   }

   listOne(guid: string) {
      return this.userRepository.listOne(guid)
   }

   insert(user: User) {
      return this.userRepository.insert(user)
   }

   update(guid: string, user: Partial<UserUpdate>) {
      return this.userRepository.update(guid, user)
   }

   delete(guid: string) {
      return this.userRepository.delete(guid)
   }
}
