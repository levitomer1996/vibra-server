import { Body, Controller, Post, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupCredentials } from './DTO/SignupCredentials.DTO';
import { SigninCredentials, SigninData } from './DTO/SigninCredentials.DTO';

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
}
