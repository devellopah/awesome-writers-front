export interface UserType {
  username: string,
  avatar: string,
}

export interface PostType {
  _id: string,
  title: string,
  body: string,
  created_at: Date,
  author: UserType,
  isOwner: boolean,
}
