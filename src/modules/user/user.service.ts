import { Inject, Injectable } from '@nestjs/common';
import { OpenFgaService } from '../openfga/openfga.service';
import { nanoid } from 'nanoid';
import {
  AssertionCheck,
  CreateDistrictDto,
  CreateGroupDto,
  CreateUserDto,
} from '../interface';
import { PrismaService } from '../prisma.service';
import { OPEN_FGA_CLIENT_SYMBOL } from '../openfga/openfga-client.factory';
import { OpenFgaClient } from '@openfga/sdk';

@Injectable()
export class UserService {
  constructor(
    private readonly openFga: OpenFgaService,
    private readonly prisma: PrismaService,
    @Inject(OPEN_FGA_CLIENT_SYMBOL)
    private readonly openFgaClient: OpenFgaClient,
  ) {}

  getAuthModelId(): string {
    return this.openFga.authId;
  }

  async createUser(dto: CreateUserDto) {
    const id = nanoid(7);
    const user = { ...dto, id };

    const result = await this.prisma.user.create({
      data: user,
    });

    await this.openFgaClient.write(
      {
        writes: [
          {
            user: `user:${result.id}`,
            relation: result.role,
            object: `district:${result.districtId}`,
          },
        ],
      },
      { authorizationModelId: this.openFga.authId },
    );
  }

  async checkUser(dto: AssertionCheck) {
    return await this.openFgaClient.check(dto);
  }

  async createDistrict(dto: CreateDistrictDto) {
    const id = dto.name.toLowerCase().replace(' ', '-') + '-district';
    const district = { ...dto, id };

    const result = await this.prisma.district.create({
      data: district,
    });

    await this.openFgaClient.write(
      {
        writes: [
          {
            user: `district:${result.id}`,
            relation: 'branch',
            object: `group:${result.groupId}`,
          },
        ],
      },
      { authorizationModelId: this.openFga.authId },
    );
  }

  async createGroup(dto: CreateGroupDto) {
    const id = dto.name.toLowerCase().replace(' ', '-') + '-group';
    const group = { ...dto, id };

    return await this.prisma.group.create({
      data: group,
    });
  }
}
