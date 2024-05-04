export interface UserEntity {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
}
export interface UserStateEntity {
  users: UserEntity[]
  user?: UserEntity
  owner?: UserEntity
  iat?: number
  exp?: number
}
