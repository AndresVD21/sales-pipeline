import { Registry, Response } from '@sales-pipeline/data';
import { nationalRegistry } from './mocks/national-registry.mock';

export const getRegistry = (id: string) => {
  console.log('[National Registry] - Init get national registry');

  const registryFound = nationalRegistry.find((registry) => registry.id === id);
  return new Promise<Response<Registry>>((resolve, reject) => {
    if (registryFound) {
      console.log('[National Registry] - National registry found');

      setTimeout(() => {
        console.log('[National Registry] - National registry sending data');
        const response: Response<Registry> = {
          data: registryFound,
          error: null,
        };
        resolve(response);
      }, 500);
    } else {
      console.log('[National Registry] - National registry not found');

      setTimeout(() => {
        console.log('[National Registry] - National registry sending error');
        const response: Response<Registry> = {
          data: null,
          error: { message: `There is no registry with the id ${id}` },
        };

        resolve(response);
      }, 500);
    }
  });
};
