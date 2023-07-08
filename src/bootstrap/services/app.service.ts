// import { DB_CONFIG } from '../interfaces/dbConfig.interface'
import { UserEntity } from '../../modules/user/infraestructure/user.entity'
import yenv from 'yenv'

const env = yenv('.env')

export class AppService {
   static get PORT(): number {
      return +env.PORT || 3000
   }

   static get DBConfig() {
      //const pass = env.DB_PASS.toString();
      return {
         host: env.DB_HOST || 'localhost',
         port: +env.DB_PORT || 3310,
         entities: [UserEntity],
         //entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
         username: env.DB_USER || 'user',
         password: env.DB_PASS || '12345',
         database: env.DB_NAME || 'bddcursonode',
         synchronize: env.DB_SYNC || false,
         logging: env.DB_LOGG || false,
      }
   }
}
