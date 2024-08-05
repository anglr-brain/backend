import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(":id")
  public getUser(@Param("id") id: string): Promise<User> {
    return this.usersService.getUser(id);
  }
}
