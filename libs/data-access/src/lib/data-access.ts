import { Lead, Response, SatisfactoryScore } from '@sales-pipeline/data';
import { getRandom } from '@sales-pipeline/utils';
import { of } from 'rxjs';
import { leads } from './mocks/internal-leads.mock';

export const getLeads = () => {
  return of(leads);
};

export const getLead = (id: string) => {
  const leadFound = leads.find((lead) => lead.id === id);
  const response: Response<Lead> = {
    data: leadFound ? leadFound : null,
    error: !leadFound ? { message: `There is not a lead with ID ${id}` } : null,
  };
  return of(response);
};

export const getSatisfactoryScore = (
  isInNationalRegistry: boolean,
  hasJudicialRecord: boolean
) => {
  console.log(
    `[Get Satisfactory Score] is in national ${isInNationalRegistry}, has judicial ${hasJudicialRecord}`
  );
  const response: SatisfactoryScore = {
    score: 0,
    systemsErrors: [],
  };
  if (isInNationalRegistry && !hasJudicialRecord) {
    response.score = getRandom(0, 100);
    return response;
  }
  if (!isInNationalRegistry) {
    response.systemsErrors.push({
      message: 'There is an error in the National Registry',
    });
  }

  if (hasJudicialRecord) {
    response.systemsErrors.push({
      message:
        'There is an error in the National Archives related to the judicial records',
    });
  }
  console.log('[Get Satisfactory Score] finished', response);
  return response;
};
