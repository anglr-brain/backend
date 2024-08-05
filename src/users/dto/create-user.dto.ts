import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { UserRole, UserTier } from "../enums";

export class CreateUserDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  public readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  public readonly lastname: string;

  @IsString()
  @IsNotEmpty()
  public readonly country: string;

  @IsString()
  @IsNotEmpty()
  public readonly username: string;

  @IsString()
  @IsNotEmpty()
  public readonly password: string;

  @IsEnum(UserRole)
  public readonly role: UserRole;

  @IsEnum(UserTier)
  public readonly tier: UserTier;

  @IsBoolean()
  public readonly verified: boolean;
}
