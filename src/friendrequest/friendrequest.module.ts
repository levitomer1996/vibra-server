import { Module } from '@nestjs/common';
import { FriendrequestController } from './friendrequest.controller';
import { FriendrequestService } from './friendrequest.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Friendship,
  FriendshipSchema,
} from 'src/friendship/Scheme/Friendship.scheme';
import { User, UserSchema } from 'src/auth/Schemes/User.Scheme';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import {
  FriendRequest,
  FriendRequestSchema,
} from './Schemes/FriendRequest.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FriendRequest.name, schema: FriendRequestSchema },
      { name: Friendship.name, schema: FriendshipSchema },
      { name: User.name, schema: UserSchema },
    ]),
    AuthModule,
    JwtModule,
  ],
  controllers: [FriendrequestController],
  providers: [FriendrequestService],
})
export class FriendrequestModule {}
