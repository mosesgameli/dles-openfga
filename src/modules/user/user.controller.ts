import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  AssertionCheck,
  CreateDistrictDto,
  CreateGroupDto,
  CreateUserDto,
} from '../interface';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('/user')
  async create(@Body() dto: CreateUserDto) {
    return this.service.createUser(dto);
  }

  @Post('/user/check')
  async checkUser(@Body() dto: AssertionCheck) {
    return this.service.checkUser(dto);
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
