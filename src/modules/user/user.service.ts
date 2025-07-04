import { Injectable } from '@nestjs/common';
import { OpenFgaService } from '../openfga/openfga.service';
import { nanoid } from 'nanoid';
import { CreateUserDto } from '../interface';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(
    private readonly openFga: OpenFgaService,
    private readonly prisma: PrismaService,
  ) {}

  getAuthModelId(): string {
    return this.openFga.authId;
  }

  async createUser(dto: CreateUserDto) {
    const id = nanoid(7);
    const user = { ...dto, id };

    return await this.prisma.user.create({
      data: user,
    });
  }
}
