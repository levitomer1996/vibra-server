import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/auth/Schemes/User.Scheme';
import { FREINDREQUESTSTATUS } from '../DTO/FriendRequestDTO.dto';

@Schema()
export class FriendRequest extends Document {
  @Prop({ required: true })
  sender: User;
  @Prop({ required: true })
  reciver: User;
  @Prop({ required: true })
  status: FREINDREQUESTSTATUS;
}

export const FriendRequestSchema = SchemaFactory.createForClass(FriendRequest);
