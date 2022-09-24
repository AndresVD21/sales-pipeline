import { NationalArchive, Response } from '@sales-pipeline/data';
import { nationalArchives } from './mocks/national-archives.mock';

export const getNationalArchive = (id: string) => {
  console.log('[National Archive] - Init get national archive');
  const nationalArchive = nationalArchives.find((lead) => lead.id === id);
  return new Promise<Response<NationalArchive>>((resolve, reject) => {
    if (nationalArchive) {
      console.log('[National Archive] - National archive found');

      setTimeout(() => {
        console.log('[National Archive] - National archive sending data');
        const response: Response<NationalArchive> = {
          data: nationalArchive,
          error: null,
        };
        resolve(response);
      }, 500);
    } else {
      console.log('[National Archive] - National archive not found');

      setTimeout(() => {
        console.log('[National Archive] - National archive sending error');
        const response: Response<NationalArchive> = {
          data: null,
          error: {
            message: `There is no a national archive with the id ${id}`,
          },
        };

        resolve(response);
      }, 500);
    }
  });
};
