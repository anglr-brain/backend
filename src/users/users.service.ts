import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto/pagination-query.dto";
import { UsersPaginationResponseDto } from "./dto/users-pagination-response.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async getUsers(
    paginationQuery: PaginationQueryDto,
  ): Promise<UsersPaginationResponseDto> {
    const { limit = 10, page = 1 } = paginationQuery;
    const offset = (page - 1) * limit;

    try {
      const [users, total] = await this.userRepository.findAndCount({
        skip: offset,
        take: limit,
      });

      const pageCount = Math.ceil(total / limit);

      return {
        data: users,
        count: users.length,
        total,
        page,
        pageCount,
      };
    } catch {
      throw new InternalServerErrorException();
    }
  }

  public async getUser(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException();
    return user;
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("Email or username already exists");
      }
      throw new InternalServerErrorException();
    }
  }

  public async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) throw new NotFoundException();
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      console.error("Error updating user:", error);

      throw new InternalServerErrorException();
    }
  }

  public async deleteUser(id: string): Promise<void> {
    try {
      const user = await this.getUser(id);
      await this.userRepository.remove(user);
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
