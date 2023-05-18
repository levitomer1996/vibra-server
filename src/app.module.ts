import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './auth/Schemes/User.Scheme';

import { ChatModule } from './chat/chat.module';
import { FriendrequestModule } from './friendrequest/friendrequest.module';
import { FriendshipModule } from './friendship/friendship.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
    ChatModule,
    FriendrequestModule,
    FriendshipModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
