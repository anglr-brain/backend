import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Retrieve all users" })
  @Get()
  public getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @ApiOperation({ summary: "Retrieve a specific user by ID" })
  @Get(":id")
  public getUser(@Param("id") id: string): Promise<User> {
    return this.usersService.getUser(id);
  }
}
