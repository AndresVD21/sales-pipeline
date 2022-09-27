import { Emoji, Space } from '@sales-pipeline/shared';
import styles from './score.module.scss';

/* eslint-disable-next-line */
export interface ScoreProps {
  score: number;
  isProspect: boolean;
}

export const Score: React.FC<ScoreProps> = ({ score, isProspect }) => {
  const isAbleToConvert = () => {
    return score > 60;
  };
  return (
    <div className={styles['score']}>
      <p className={styles['score__number']}>{score}</p>
      {isProspect ? null : isAbleToConvert() ? (
        <p className={styles['score__result']}>
          The score obtained allows to convert the lead into prospect
          <Space />
          <Emoji emoji="🎉" label="party popper"></Emoji>
        </p>
      ) : (
        <p className={styles['score__result']}>
          Sorry the score for this lead is not the required to convert, please
          review it with management.
        </p>
      )}
    </div>
  );
};

export default Score;
