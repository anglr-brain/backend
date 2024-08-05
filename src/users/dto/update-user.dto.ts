import {
  IsEmail,
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
} from "class-validator";
import { UserRole, UserTier } from "../enums";

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  public readonly email?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public readonly firstname?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public readonly lastname?: string;

  @IsString()
  @IsNotEmpty()
  public readonly country: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public readonly username?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public readonly password?: string;

  @IsOptional()
  @IsEnum(UserRole)
  public readonly role?: UserRole;

  @IsOptional()
  @IsEnum(UserTier)
  public readonly tier?: UserTier;

  @IsOptional()
  @IsBoolean()
  public readonly verified?: boolean;
}
