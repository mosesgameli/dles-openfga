import { Injectable } from '@nestjs/common';
import { OpenFgaService } from '../openfga/openfga.service';

@Injectable()
export class UserService {
  constructor(private readonly openFga: OpenFgaService) {}

  getAuthModelId(): string {
    return this.openFga.authId;
  }
}
