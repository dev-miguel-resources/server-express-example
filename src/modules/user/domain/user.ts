import { IEntity } from 'src/modules/shared/entity.interface'

// INTERFACES
interface UserRequired {
   name: string
   lastname: string
   email: string
   password: string
}

interface UserOptional {
   refreshToken: string
   active: boolean
   guid: string
}

type UserUpdate = {
   name: string
   lastname: string
   password: string
   refreshToken: string
   active: boolean
}

export type UserProperties = Required<UserRequired> & Partial<UserOptional>

// DATA MODEL
export default class User implements IEntity<UserProperties, UserUpdate> {
   private name: string
   private lastname: string
   private readonly email: string
   private password: string
   private refreshtoken: string
   private active: boolean
   private readonly guid: string

   constructor(userProperties: UserProperties) {
      this.active = true
      Object.assign(this, userProperties)
   }

   // METHODS
   properties(): UserProperties {
      return {
         name: this.name,
         lastname: this.lastname,
         email: this.email,
         password: this.password,
         refreshToken: this.refreshtoken,
         active: this.active,
         guid: this.guid
      }
   }

   update(fields: UserUpdate) {
      Object.assign(this, fields)
   }

   delete() {
      this.active = false
   }
}
