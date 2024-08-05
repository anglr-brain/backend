import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  public limit?: number;

  @IsOptional()
  @IsPositive()
  public page?: number;
}
