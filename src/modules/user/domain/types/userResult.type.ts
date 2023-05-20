import { Result } from 'neverthrow'
import {
   UserLastnameRequiredException,
   UserNameRequiredException,
   UserPasswordLengthInvalidException,
   UserPasswordRequiredException,
} from '../exceptions/user.exception'
import User from '../user'

export type UserResult = Result<
   User,
   | UserNameRequiredException
   | UserLastnameRequiredException
   | UserPasswordRequiredException
   | UserPasswordLengthInvalidException
>
