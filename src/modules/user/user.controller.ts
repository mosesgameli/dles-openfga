import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateDistrictDto, CreateGroupDto, CreateUserDto } from '../interface';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/user')
  authModelId() {
    return this.service.getAuthModelId();
  }

  @Post('/user')
  async create(@Body() dto: CreateUserDto) {
    return this.service.createUser(dto);
  }

  @Post('/district')
  async createDistrict(@Body() dto: CreateDistrictDto) {
    return this.service.createDistrict(dto);
  }

  @Post('/group')
  async createGroup(@Body() dto: CreateGroupDto) {
    return this.service.createGroup(dto);
  }
}
