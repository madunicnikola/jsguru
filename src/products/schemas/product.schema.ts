import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

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
    author: mongoose.Types.ObjectId;
}
export const ProductSchema = SchemaFactory.createForClass(Product);