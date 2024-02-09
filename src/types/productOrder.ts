import { Document } from "mongoose";
import { User } from "src/auth/schemas/user.schema";

export interface MainProduct extends Document {
    creator: User;
    name: string;
    description: string;
    price: number;
    quantity: number;
    productImg: string;
}