import styles from './convert-process.module.scss';
import { CombinedScoreResponse } from '@sales-pipeline/data';
import Loading from './loading/loading';
import Score from './score/score';
import Errors from './errors/errors';

/* eslint-disable-next-line */
export interface ConvertProcessProps {
  score: CombinedScoreResponse;
  scoreInProcess?: boolean;
  hasLeadSelected?: boolean;
  hasScore?: boolean;
  isProspect: boolean;
}

export const ConvertProcess: React.FC<ConvertProcessProps> = ({
  score,
  scoreInProcess,
  hasLeadSelected,
  hasScore,
  isProspect,
}) => {
  const hasErrors = () => {
    return score?.requestErrors.length > 0 || score?.systemsErrors.length > 0;
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
      <Score score={score.score} isProspect={isProspect} />
    ) : (
      <div className={styles['no__previous__score']}>
        The selected lead does not have a previous score
      </div>
    )
  ) : null;
};

export default ConvertProcess;
