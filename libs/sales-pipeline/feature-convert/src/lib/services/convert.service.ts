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
    return generateScore(registry.data, archive.data, lead.data).pipe(
      map((score) => {
        combinedScoreResponse.score = score.score;
        combinedScoreResponse.systemsErrors = [...score.systemsErrors];

        console.log(`[Process Combined Results] combined response:`);
        console.log(combinedScoreResponse);
        return combinedScoreResponse;
      })
    );
  }
  combinedScoreResponse.requestErrors = [
    ...(registry.error ? [registry.error] : []),
    ...(archive.error ? [archive.error] : []),
    ...(lead.error ? [lead.error] : []),
  ];
  return of(combinedScoreResponse);
};

const generateScore = (
  leadRegistry: Registry,
  leadArchive: NationalArchive,
  localLead: Lead
) => {
  const score = getSatisfactoryScore(localLead, leadRegistry, leadArchive);
  return score;
};

export const convertLeadIntoProspect = () => {
  return of({ message: 'Lead converted successfully!' });
};
