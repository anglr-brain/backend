import { IsEnum, IsOptional, IsPositive, IsString } from "class-validator";

export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  public limit?: number;

  @IsOptional()
  @IsPositive()
  public page?: number;

  @IsOptional()
  @IsString()
  public orderBy?: string;

  @IsOptional()
  @IsEnum(OrderDirection)
  public orderDirection?: OrderDirection;
}
