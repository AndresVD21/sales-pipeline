import { CombinedScoreResponse, Lead } from '@sales-pipeline/data';
import { getLead } from '@sales-pipeline/data-access';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sales-pipeline-feature-convert.scss';
import { Subject, takeUntil } from 'rxjs';
import Prospect from './components/prospects/prospects';
import { processLeadConvert } from './services/convert.service';
import ConvertProcess from './components/convert-process/convert-process';

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

  useEffect(() => {
    return () => {
      $destroy.next(true);
      $destroy.unsubscribe();
    };
  }, []);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const hasLeadSelected = () => {
    return !!lead;
  };

  const hasScore = () => {
    return lead ? lead.hasScore : false;
  };

  const getLeadById = (id: string) => {
    setScore(scoreInitialState);
    setScoreInProcess(false);
    getLead(id)
      .pipe(takeUntil($destroy))
      .subscribe(({ data }) => {
        console.log('[Feature Convert] Lead data recived', data);
        setLead(data ? data : null);
      });
  };

  const convertLead = (id: string) => {
    setScoreInProcess(true);
    processLeadConvert(id)
      .pipe(takeUntil($destroy))
      .subscribe((data) => {
        console.log('[Feature Convert] process lead convert finished', data);
        setScore(data);
        setLead(
          lead
            ? {
                ...lead,
                hasScore: true,
                score: data.score,
              }
            : null
        );
        setScoreInProcess(false);
      });
  };

  return (
    <main className="convert-container container">
      <h1 className="convert-container__title">
        {/* <button onClick={goToHome}>Go To Home</button> */}
        Start Process
      </h1>
      <hr />
      <p className="convert-container__info">
        Please enter the lead ID you want to turn into prospects and press the
        search button to retrieve the information.
      </p>
      <section className="search-lead">
        <input
          type="text"
          className="search-lead__input"
          value={searchId}
          placeholder="Lead ID"
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className="search-lead__button fill"
          disabled={!searchId}
          onClick={() => getLeadById(searchId)}
        >
          Search
        </button>
      </section>
      <div className="lead-selected">
        <Prospect lead={lead} hasLeadSelected={hasLeadSelected()} />
      </div>
      <button
        className="process-convert__button fill"
        onClick={() => convertLead(searchId)}
        disabled={!lead}
      >
        Process Score
      </button>
      <section className="convert-process-container">
        <ConvertProcess
          score={score}
          scoreInProcess={scoreInProcess}
          hasLeadSelected={hasLeadSelected()}
          hasScore={hasScore()}
        />
      </section>
    </main>
  );
};

export default SalesPipelineFeatureConvert;
