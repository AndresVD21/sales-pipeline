import { CombinedScoreResponse, Lead } from '@sales-pipeline/data';
import { getLead } from '@sales-pipeline/data-access';
import { useEffect, useState } from 'react';
import styles from './sales-pipeline-feature-convert.module.scss';
import { Subject, takeUntil } from 'rxjs';
import Prospect from './components/prospects/prospects';
import { processLeadConvert } from './services/convert.service';
import ConvertProcess from './components/convert-process/convert-process';
import Convert from './components/convert-process/convert/convert';

const scoreInitialState = {
  score: 0,
  requestErrors: [],
  systemsErrors: [],
};

/* eslint-disable-next-line */
export interface SalesPipelineFeatureConvertProps {}

export const SalesPipelineFeatureConvert: React.FC<
  SalesPipelineFeatureConvertProps
> = () => {
  const $destroy = new Subject<boolean>();
  const [lead, setLead] = useState<Lead | null>(null);
  const [searchId, setSearchId] = useState('');
  const [scoreInProcess, setScoreInProcess] = useState(false);
  const [score, setScore] = useState<CombinedScoreResponse>(scoreInitialState);
  const [leadNotFound, setLeadNotFound] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     $destroy.next(true);
  //     $destroy.unsubscribe();
  //   };
  // }, []);

  const hasLeadSelected = () => {
    return !!lead;
  };

  const hasScore = () => {
    return lead ? lead.hasScore : false;
  };

  const isAbleToConvert = () => {
    return lead?.score ? lead.score > 60 : false;
  };

  const getLeadById = (id: string) => {
    setScore(scoreInitialState);
    setScoreInProcess(false);
    getLead(id)
      .pipe(takeUntil($destroy))
      .subscribe(({ data }) => {
        console.log('[Feature Convert] Lead data recived', data);
        setLead(data ? data : null);
        setLeadNotFound(data ? false : true);
      });
  };

  const convertLead = (id: string) => {
    setScoreInProcess(true);
    processLeadConvert(id)
      .pipe(takeUntil($destroy))
      .subscribe((data) => {
        data.pipe(takeUntil($destroy)).subscribe((score) => {
          console.log('[Feature Convert] process lead convert finished', score);
          setScore(score);
          setLead(
            lead
              ? {
                  ...lead,
                  hasScore: true,
                  score: score.score,
                }
              : null
          );
          setScoreInProcess(false);
        });
      });
  };
  return (
    <main className={styles['container']}>
      <h1 className={styles['container__title']}>Start Process</h1>
      <hr />
      <p className={styles['container__info']}>
        Please enter the lead ID you want to turn into prospects and press the
        search button to retrieve the information.
      </p>
      <section className={styles['search-lead']}>
        <input
          type="text"
          className={styles['search-lead__input']}
          value={searchId}
          placeholder="Lead ID"
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className={`${styles['button']} ${styles['search-lead__button']} ${styles['fill']}`}
          disabled={!searchId}
          onClick={() => getLeadById(searchId)}
        >
          Search
        </button>
      </section>
      <section className={styles['lead-selected']}>
        <Prospect
          lead={lead}
          hasLeadSelected={hasLeadSelected()}
          leadNotFound={leadNotFound}
        />
      </section>
      <button
        className={`${styles['button']} ${styles['process-score__button']} ${styles['fill']}`}
        onClick={() => convertLead(searchId)}
        disabled={!lead}
      >
        Process Score
      </button>
      <section className={styles['convert-process-container']}>
        <ConvertProcess
          score={score}
          scoreInProcess={scoreInProcess}
          hasLeadSelected={hasLeadSelected()}
          hasScore={hasScore()}
        />
        {isAbleToConvert() && <Convert />}
      </section>
    </main>
  );
};

export default SalesPipelineFeatureConvert;
