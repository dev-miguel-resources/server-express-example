import { Result } from 'neverthrow'
import { UserEmailInvalidException } from '../../exceptions/user.exception'
import { EmailVO } from '../email.vo'

export type EmailResult = Result<EmailVO, UserEmailInvalidException>
