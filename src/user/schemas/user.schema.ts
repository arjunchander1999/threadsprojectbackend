
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string[];

  @Prop({ default: 'user' }) // ne
  role: 'user' | 'admin';
}


export const UserSchema = SchemaFactory.createForClass(User);
