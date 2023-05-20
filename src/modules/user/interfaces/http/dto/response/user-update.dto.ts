import { UserProperties } from 'src/modules/user/domain/types/userProperties.type'
import { DTO } from './dto.interface'

interface UserDTO {
   name: string
   lastname: string
   email: string
   guid: string
}

export type UserUpdateDTO = UserDTO

export class UserUpdateMapping extends DTO<UserProperties, UserUpdateDTO> {
   execute(data: UserProperties): UserUpdateDTO {
      return {
         name: data.name,
         lastname: data.lastname,
         email: data.email.value,
         guid: data.guid,
      }
   }
}
