import { Module } from '@nestjs/common';
import { OpenFgaClientProvider } from './openfga-client.factory';
import { OpenFgaService } from './openfga.service';

@Module({
  providers: [OpenFgaClientProvider, OpenFgaService],
  exports: [OpenFgaService],
})
export class OpenFgaModule {}
