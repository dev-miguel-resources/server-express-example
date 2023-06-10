import User from '../domain/user'
import { UserUpdate } from '../domain/types/userUpdate.type'
import { UserRepository } from '../domain/user.repository'

export default class UserApplication {
   constructor(private readonly userRepository: UserRepository) {}

   async list() {
      return this.userRepository.list()
   }

   async listOne(guid: string) {
      return this.userRepository.listOne(guid)
   }

   async insert(user: User) {
      return this.userRepository.insert(user)
   }

   async update(guid: string, user: Partial<UserUpdate>) {
      return this.userRepository.update(guid, user)
   }

   async delete(guid: string) {
      return this.userRepository.delete(guid)
   }
}
