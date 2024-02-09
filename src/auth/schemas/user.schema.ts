import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
    @Prop({default: false})
    privilegedUser: boolean;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phoneNumber: string;

    @Prop({unique: [true, "\nUnijeli ste e-mail koji već postoji!\n"]})
    email: string;

    @Prop({select: false})
    password: string;

    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}

export const UserSchema = SchemaFactory.createForClass(User);