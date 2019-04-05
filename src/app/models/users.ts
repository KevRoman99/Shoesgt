export interface Roles{
    admin?: boolean;
    editor?: boolean;
}
export interface UserInterface{
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    userUid?: string;
    role?: Roles;
}