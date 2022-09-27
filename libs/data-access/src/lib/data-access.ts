import {
  Lead,
  NationalArchive,
  Registry,
  Response,
  SatisfactoryScore,
} from '@sales-pipeline/data';
import { compareLeads, getRandom } from '@sales-pipeline/utils';
import { combineLatestWith, map, of } from 'rxjs';
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

export const getProspects = () => {
  const response: Response<Lead[]> = {
    data: leads.filter((lead) => lead.isProspect),
    error: null,
  };
  return of(response);
};

export const getSatisfactoryScore = (
  lead: Lead,
  registry: Registry,
  archive: NationalArchive
) => {
  const informationMatch$ = checkInformationMatch(registry, lead);
  const hasJudicialRecord$ = checkJudicialInformation(archive);
  return informationMatch$.pipe(combineLatestWith(hasJudicialRecord$)).pipe(
    map(([matchNationalRegistry, hasJudicialRecord]) => {
      console.log(
        `[Get Satisfactory Score] is in national ${matchNationalRegistry}, has judicial ${hasJudicialRecord}`
      );
      const response: SatisfactoryScore = {
        score: 0,
        systemsErrors: [],
      };
      if (matchNationalRegistry && !hasJudicialRecord) {
        response.score = getRandom(0, 100);
        return response;
      }
      if (!matchNationalRegistry) {
        response.systemsErrors.push({
          message:
            'There is an error between the stored data and the National Registry',
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
    })
  );
};

const checkInformationMatch = (registryLead: Registry, localLead: Lead) => {
  return of(compareLeads(registryLead, localLead));
};

const checkJudicialInformation = (archiveLead: NationalArchive) => {
  return of(archiveLead.hasJudicialRecord);
};
