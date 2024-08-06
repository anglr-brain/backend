import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersPaginationResponseDto } from "./dto/users-pagination-response.dto";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto/pagination-query.dto";

@ApiTags("Users")
@Controller({ path: "users", version: "1" })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Retrieve all users" })
  @ApiQuery({
    name: "limit",
    required: false,
    type: Number,
    description: "Default value: 10",
  })
  @ApiQuery({
    name: "page",
    required: false,
    type: Number,
    description: "Default value: 1",
  })
  @ApiQuery({
    name: "orderBy",
    required: false,
    type: String,
    description: "Default value: createdAt",
  })
  @ApiQuery({
    name: "orderDirection",
    required: false,
    type: String,
    description: "Default value: ASC",
  })
  @Get()
  public getUsers(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<UsersPaginationResponseDto> {
    return this.usersService.getUsers(paginationQuery);
  }

  @ApiOperation({ summary: "Retrieve a specific user by ID" })
  @Get(":id")
  public getUser(@Param("id") id: string): Promise<User> {
    return this.usersService.getUser(id);
  }

  @ApiOperation({ summary: "Create a new user" })
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @ApiOperation({ summary: "Update an existing user" })
  @Patch(":id")
  public updateUser(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @ApiOperation({ summary: "Delete a specific user by ID" })
  @Delete(":id")
  public deleteUser(@Param("id") id: string): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
