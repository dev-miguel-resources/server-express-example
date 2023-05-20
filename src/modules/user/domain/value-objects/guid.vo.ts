import { validate as uuidValidate } from 'uuid'
import { ValueObject } from './vo.class'
import { UserGuidInvalidException } from '../exceptions/user.exception'
import { err, ok } from 'neverthrow'
import { GuidProps } from './interfaces/guidProps.interface'
import { GuidResult } from './types/guidResult.type'

export class GuidVO extends ValueObject<GuidProps> {
   private constructor(props: GuidProps) {
      super(props)
   }

   static create(guid: string): GuidResult {
      if (!uuidValidate(guid)) {
         return err(new UserGuidInvalidException())
      }

      return ok(new GuidVO({ value: guid }))
   }

   get value(): string {
      return this.props.value
   }
}
