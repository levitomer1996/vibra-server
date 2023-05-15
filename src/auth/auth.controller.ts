import {
  Body,
  Controller,
  Post,
  Logger,
  UseGuards,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupCredentials } from './DTO/SignupCredentials.DTO';
import {
  SigninCredentials,
  SigninData,
  UserData,
} from './DTO/SigninCredentials.DTO';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './GetUser.Decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  private logger = new Logger('Auth Controller');
  @Post('/signup')
  async signup_owner(@Body() creds: SignupCredentials) {
    this.logger.log('New credentials arrived.');
    this.logger.log(creds);
    return this.authService.signUp(creds);
  }
  @Post('/signin')
  async signIn(@Body() signInDto: SigninCredentials): Promise<SigninData> {
    return await this.authService.signIn(signInDto);
  }
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  @Get('/getuser')
  async getUser(@GetUser() user): Promise<UserData> {
    const { email, f_name, languge_learn, languge_speak } = user;

    return { email, f_name, languge_learn, languge_speak };
  }
}
