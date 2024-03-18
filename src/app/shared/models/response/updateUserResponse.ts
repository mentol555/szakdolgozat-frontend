import { User } from "../user";

export interface UpdateUserResponse {
    user: User,
    token: string
}