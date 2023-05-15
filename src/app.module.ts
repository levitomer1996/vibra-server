import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './auth/Schemes/User.Scheme';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
