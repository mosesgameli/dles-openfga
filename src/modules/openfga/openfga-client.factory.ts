import { Provider } from '@nestjs/common';
import { OpenFgaClient } from '@openfga/sdk';

export const OPEN_FGA_CLIENT_SYMBOL = Symbol.for('OPEN_FGA_CLIENT_SYMBOL');

export const OpenFgaClientProvider: Provider<OpenFgaClient> = {
  provide: OPEN_FGA_CLIENT_SYMBOL,
  useFactory: () => {
    return new OpenFgaClient({
      apiUrl: 'http://localhost:8050',
      storeId: '01JZBAN2HN6H9MH1G8XJ3EP7KZ',
    });
  },
};
