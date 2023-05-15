import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Language from '../DTO/Languges.enum';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  salt: string;
  @Prop({ required: true })
  f_name: string;
  @Prop({ required: true })
  languge_speak: Language[];
  @Prop({ required: true })
  languge_learn: Language[];
  @Prop({ required: true })
  user_rate: Number;
}

export const UserSchema = SchemaFactory.createForClass(User);
