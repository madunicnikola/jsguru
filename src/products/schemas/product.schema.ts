import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

@Schema({timestamps: true})
export class Product {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    description: string;
    
    @Prop()
    price: number;
    
    @Prop()
    quantity: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
}
export const ProductSchema = SchemaFactory.createForClass(Product);