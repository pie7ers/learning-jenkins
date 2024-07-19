import { IUser, users } from '../mockData/user'


export const fetchUsers = (): IUser[] => users;
export const fetchUserById = (id: number): IUser | undefined => {
    return users.find(user => user.id === id);
}