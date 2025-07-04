import { Module } from '@nestjs/common';
import { OpenFgaModule } from '../openfga/openfga.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [OpenFgaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
