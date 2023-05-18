import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/auth/Schemes/User.Scheme';

@Schema()
export class Friendship extends Document {
  @Prop({ required: true })
  users: User[];
}

export const FriendshipSchema = SchemaFactory.createForClass(Friendship);
