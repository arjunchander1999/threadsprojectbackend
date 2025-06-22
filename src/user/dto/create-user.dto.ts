import { IsString,IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  password:string;
  @IsString()
  @IsEmail()
  email:string;
  
}
