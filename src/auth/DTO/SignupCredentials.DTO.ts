import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsNumber,
  IsEmail,
  IsIn,
  IsEnum,
} from 'class-validator';
import Language from './Languges.enum';

export class SignupCredentials {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  f_name: string;

  @IsEnum(Language)
  languge_speak: Language[];
  @IsEnum(Language)
  languge_learn: Language[];
}
