import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../auth/schemas/user.schema';

@Schema()
export class ProductArticle {
    @Prop({type: Types.ObjectId, ref: 'User'})
    creator: User;

    @Prop()
    name: String;

    @Prop()
    description: String;

    @Prop()
    price: number;

    @Prop()
    quantity: number;

    @Prop()
    productImg: string;
};

export const ProductArticleSchema = SchemaFactory.createForClass(ProductArticle);