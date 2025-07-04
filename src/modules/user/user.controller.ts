import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../interface';

@Controller('/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  authModelId() {
    return this.service.getAuthModelId();
  }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.service.createUser(dto);
  }
}
