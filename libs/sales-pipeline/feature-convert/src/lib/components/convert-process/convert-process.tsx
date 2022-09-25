import './convert-process.scss';
import { CombinedScoreResponse } from '@sales-pipeline/data';
import Loading from './loading/loading';
import Score from './score/score';
import Errors from './errors/errors';

/* eslint-disable-next-line */
export interface ConvertProcessProps {
  score: CombinedScoreResponse;
  scoreInProcess: boolean;
  hasLeadSelected: boolean;
  hasScore: boolean;
}

export const ConvertProcess: React.FC<ConvertProcessProps> = ({
  score,
  scoreInProcess,
  hasLeadSelected,
  hasScore,
}) => {
  const hasErrors = () => {
    return score.requestErrors.length > 0 || score.systemsErrors.length > 0;
  };
  return hasLeadSelected ? (
    scoreInProcess ? (
      <Loading />
    ) : hasErrors() ? (
      <Errors
        requestErrors={score.requestErrors}
        systemsErrors={score.systemsErrors}
      />
    ) : hasScore ? (
      <Score score={score.score} />
    ) : (
      <div>The selected lead does not have a previous score</div>
    )
  ) : null;
};

export default ConvertProcess;
