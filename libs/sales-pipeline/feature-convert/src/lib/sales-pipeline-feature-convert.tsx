import { Lead } from '@sales-pipeline/data';
import { getLead } from '@sales-pipeline/data-access';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sales-pipeline-feature-convert.scss';
import { Subject, takeUntil } from 'rxjs';
import Prospect from './components/prospects/prospects';

/* eslint-disable-next-line */
export interface SalesPipelineFeatureConvertProps {}

export const SalesPipelineFeatureConvert: React.FC<
  SalesPipelineFeatureConvertProps
> = () => {
  const $destroy = new Subject<boolean>();
  const [lead, setLead] = useState<Lead>();
  const [searchId, setSearchId] = useState('');

  // useEffect(() => {
  //   return () => {
  //     $destroy.next(true);
  //     $destroy.unsubscribe();
  //   };
  // }, []);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const getLeadById = (id: string) => {
    getLead(id)
      .pipe(takeUntil($destroy))
      .subscribe((data) => {
        console.log(data);
        setLead(data);
      });
  };

  return (
    <main className="container convert-container">
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
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className="search-lead__button fill"
          onClick={() => getLeadById(searchId)}
        >
          Search
        </button>
      </section>
      <div className="lead-selected">
        <Prospect lead={lead} />
      </div>
      <button className="process-convert__button fill">Convert Lead</button>
    </main>
  );
};

export default SalesPipelineFeatureConvert;
