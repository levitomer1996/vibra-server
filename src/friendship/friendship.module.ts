import { Module } from '@nestjs/common';
import { FriendshipController } from './friendship.controller';
import { FriendshipService } from './friendship.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Friendship, FriendshipSchema } from './Scheme/Friendship.scheme';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from 'src/auth/Schemes/User.Scheme';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Friendship.name, schema: FriendshipSchema },
      { name: User.name, schema: UserSchema },
    ]),
    AuthModule,
    JwtModule,
  ],
  controllers: [FriendshipController],
  providers: [FriendshipService, AuthService],
})
export class FriendshipModule {}
