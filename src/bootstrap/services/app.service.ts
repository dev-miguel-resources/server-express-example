//import { DB_CONFIG } from '../interfaces/dbConfig.interface'
import { UserEntity } from '../../modules/user/infraestructure/user.entity'

export class AppService {
   static get PORT(): number {
      return +process.env.PORT || 3000
   }

   static get DBConfig() {
      return {
         host: process.env.DB_HOST || 'localhost',
         port: +process.env.DB_PORT || 3310,
         entities: [UserEntity],
         //entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
         username: process.env.DB_USER || 'user',
         password: process.env.DB_PASS || '12345',
         database: process.env.DB_NAME || 'bddcursonode',
         synchronize: process.env.DB_SYNC === 'true' ? true : false,
         logging: process.env.DB_LOGG === 'true' ? true : false,
      }
   }
}


