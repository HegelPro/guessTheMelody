export interface ICreateUserData {
  name: string
  email: string
  password: string
  confirm: string
  avatarFile?: FormData
}