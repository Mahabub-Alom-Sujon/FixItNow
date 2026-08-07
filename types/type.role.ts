export type UserRole = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

export interface User {
    id: string;
    name: string;
    email: string;
    address?: string;
    profileImage?: string;
    city?:string;
    isBanned: boolean;
    createdAt: string;
    role: UserRole;
}