import { User } from "../entities/user.entity";

export class UsersPaginationResponseDto {
  public data: User[];
  public count: number;
  public total: number;
  public page: number;
  public pageCount: number;
}
