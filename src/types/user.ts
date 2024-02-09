import { Document } from "mongoose";

export interface MainUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    readonly password: string;
    admin: boolean;
    phoneNumber: string;
}