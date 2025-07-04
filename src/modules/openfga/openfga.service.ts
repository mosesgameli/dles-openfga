import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { OpenFgaClient, TypeDefinition } from '@openfga/sdk';
import { OPEN_FGA_CLIENT_SYMBOL } from './openfga-client.factory';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

type OpenFgaJsonModel = {
  type_definitions: TypeDefinition[];
  schema_version: string;
};

@Injectable()
export class OpenFgaService implements OnModuleInit {
  private authModelId: string;

  constructor(
    @Inject(OPEN_FGA_CLIENT_SYMBOL)
    private readonly openFgaClient: OpenFgaClient,
  ) {}

  public get authId(): string {
    return this.authModelId;
  }

  async onModuleInit() {
    const filePath = join(__dirname, '..', '..', 'config', 'model.json');
    const fileString = (await readFile(filePath)).toString();
    const modelJson = JSON.parse(fileString) as OpenFgaJsonModel;

    const authModel = await this.openFgaClient.writeAuthorizationModel({
      type_definitions: modelJson.type_definitions,
      schema_version: modelJson.schema_version,
    });

    this.authModelId = authModel.authorization_model_id;
  }
}
