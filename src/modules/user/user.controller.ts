import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  authModelId() {
    return this.service.getAuthModelId();
  }
}
