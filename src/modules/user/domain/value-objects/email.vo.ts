import { ValueObject } from './vo.class'
import { UserEmailInvalidException } from '../exceptions/user.exception'
import { err, ok } from 'neverthrow'
import { EmailProps } from './interfaces/emailProps.interface'
import { EmailResult } from './types/emailResult.type'

export class EmailVO extends ValueObject<EmailProps> {
   private constructor(props: EmailProps) {
      super(props)
   }

   static create(email: string): EmailResult {
      if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi)) {
         return err(new UserEmailInvalidException())
      }

      return ok(new EmailVO({ value: email }))
   }

   get value(): string {
      return this.props.value
   }
}
