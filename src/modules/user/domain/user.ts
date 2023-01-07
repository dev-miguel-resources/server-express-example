export default class User {
  private readonly id: number
  private name: string
  private lastname: string
  private readonly email: string
  private password: string
  private refreshtoken: string
  private active: boolean | null

  constructor(
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string,
    refreshtoken: string,
    active: boolean,
  ) {
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.password = password
    this.refreshtoken = refreshtoken
    this.active = active
  }
}
