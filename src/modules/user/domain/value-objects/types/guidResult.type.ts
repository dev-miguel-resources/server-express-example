import { Result } from 'neverthrow'
import { UserGuidInvalidException } from '../../exceptions/user.exception'
import { GuidVO } from '../guid.vo'

export type GuidResult = Result<GuidVO, UserGuidInvalidException>
