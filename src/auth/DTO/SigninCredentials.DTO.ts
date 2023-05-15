import { IsString } from 'class-validator';
import Language from './Languges.enum';

export class SigninCredentials {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class SigninData {
  token: string;
  email: string;
  f_name: string;
  languge_speak: Language[];
  languge_learn: Language[];
}
