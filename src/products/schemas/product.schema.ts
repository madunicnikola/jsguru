import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

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

}
export const ProductSchema = SchemaFactory.createForClass(Product);