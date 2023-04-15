export enum DomainExceptionCode {
   DEFAULT_DOMAIN_EXCEPTION = 'DEFAULT_DOMAIN_EXCEPTION',
   USER_NAME_REQUIRED = 'USER_NAME_REQUIRED',
   USER_LASTNAME_REQUIRED = 'USER_LASTNAME_REQUIRED',
   USER_EMAIL_REQUIRED = 'USER_EMAIL_REQUIRED',
   USER_PASSWORD_REQUIRED = 'USER_PASSWORD_REQUIRED',
   USER_EMAIL_INVALID = 'USER_EMAIL_INVALID',
   USER_PASSWORD_LENGTH_INVALID = 'USER_PASSWORD_LENGTH_INVALID',
   USER_GUID_INVALID = 'USER_GUID_INVALID',
   USER_NOT_FOUND = 'USER_NOT_FOUND',
}

export abstract class DomainException extends Error {

   constructor(message?: string) {
      super(message)

      this.name = DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION
   }
}
