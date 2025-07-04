import { Module } from '@nestjs/common';
import { OpenFgaModule } from '../openfga/openfga.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [OpenFgaModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
