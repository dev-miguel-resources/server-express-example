import { UserProperties } from 'src/modules/user/domain/types/userProperties.type'
import { DTO } from './dto.interface'

interface UserDTO {
   name: string
   lastname: string
   email: string
   guid: string
}

export type UserListOneDTO = UserDTO

export class UserListOneMapping extends DTO<UserProperties, UserDTO> {
   execute(data: UserProperties): UserListOneDTO {
      return {
         name: data.name,
         lastname: data.lastname,
         email: data.email.value,
         guid: data.guid,
      }
   }
}
