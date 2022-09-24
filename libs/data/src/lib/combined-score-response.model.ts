import { Error } from './response.model';

export class CombinedScoreResponse {
  score: number;
  requestErrors: (Error | null | undefined)[];
  systemsErrors: Error[];
}
