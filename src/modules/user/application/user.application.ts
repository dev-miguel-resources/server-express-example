import User from '../domain/user';
import { UserRepository } from '../domain/user.repository';

export default class UserApplication {

   constructor(private readonly userRepository: UserRepository) {}

   list() {
      return this.userRepository.list()
   }

   listOne(id: number) {
      return this.userRepository.listOne(id)
   }
}
