import {
  CombinedScoreResponse,
  Lead,
  NationalArchive,
  Registry,
  Response,
} from '@sales-pipeline/data';
import {
  getLead,
  getNationalArchive,
  getRegistry,
  getSatisfactoryScore,
} from '@sales-pipeline/data-access';
import { compareLeads } from '@sales-pipeline/utils';
import { combineLatestWith, from, map, of } from 'rxjs';

export const processLeadConvert = (leadId: string) => {
  const registry$ = from(getRegistry(leadId));
  const nationalArchive$ = from(getNationalArchive(leadId));
  const localLead$ = getLead(leadId);

  const result = registry$.pipe(
    combineLatestWith(nationalArchive$, localLead$)
  );
  return result.pipe(map((data) => processCombinedResults(data)));
};

const processCombinedResults = (
  data: [Response<Registry>, Response<NationalArchive>, Response<Lead>]
) => {
  console.log('[Process Combined Results] Process started');
  const [registry, archive, lead] = data;
  const combinedScoreResponse: CombinedScoreResponse = {
    score: 0,
    requestErrors: [],
    systemsErrors: [],
  };
  if (registry.data && lead.data && archive.data) {
    const scoreGenerated = generateScore(
      registry.data,
      archive.data,
      lead.data
    );
    combinedScoreResponse.score = scoreGenerated.score;
    combinedScoreResponse.systemsErrors = [...scoreGenerated.systemsErrors];
  } else {
    combinedScoreResponse.requestErrors = [
      ...(registry.error ? [registry.error] : []),
      ...(archive.error ? [archive.error] : []),
      ...(lead.error ? [lead.error] : []),
    ];
  }
  console.log(`[Process Combined Results] combined response:`);
  console.log(combinedScoreResponse);
  return combinedScoreResponse;
};

const generateScore = (
  leadRegistry: Registry,
  leadArchive: NationalArchive,
  localLead: Lead
) => {
  const registryInformationMatch = checkInformationMatch(
    leadRegistry,
    localLead
  );
  const hasJudicialRecord = checkJudicialInformation(leadArchive);
  const score = getSatisfactoryScore(
    registryInformationMatch,
    hasJudicialRecord
  );
  console.log(`[Generate Score] Generated score`, score);
  return score;
};

const checkInformationMatch = (registryLead: Registry, localLead: Lead) => {
  return compareLeads(registryLead, localLead);
};

const checkJudicialInformation = (archiveLead: NationalArchive) => {
  return archiveLead.hasJudicialRecord;
};

export const convertLeadIntoProspect = () => {
  return of({ message: 'Lead converted successfully!' });
};
