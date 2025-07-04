import { Module } from '@nestjs/common';
import { OpenFgaClientProvider } from './openfga-client.factory';
import { OpenFgaService } from './openfga.service';

@Module({
  providers: [OpenFgaClientProvider, OpenFgaService],
  exports: [OpenFgaClientProvider, OpenFgaService],
})
export class OpenFgaModule {}
