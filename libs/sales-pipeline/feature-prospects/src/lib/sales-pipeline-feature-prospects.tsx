import { Lead } from '@sales-pipeline/data';
import { useEffect, useState } from 'react';
import { Subject, takeUntil } from 'rxjs';
import Leads from './components/leads/leads';
import Prospects from './components/prospects/prospects';
import styles from './sales-pipeline-feature-prospects.module.scss';
import { getLeadsFromData } from './services/prospects.service';

/* eslint-disable-next-line */
export interface SalesPipelineFeatureProspectsProps {}

export const SalesPipelineFeatureProspects: React.FC<
  SalesPipelineFeatureProspectsProps
> = (props: SalesPipelineFeatureProspectsProps) => {
  const $destroy = new Subject<boolean>();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [prospects, setProspects] = useState<Lead[]>([]);

  useEffect(() => {
    getLeadsList();

    // return () => {
    //   $destroy.next(true);
    //   $destroy.unsubscribe();
    // };
  }, []);

  const getLeadsList = () => {
    getLeadsFromData()
      .pipe(takeUntil($destroy))
      .subscribe((data) => {
        setLeads(data ? [...data] : []);
        const prospectsList = filterProspects(data);
        setProspects(prospectsList);
      });
  };

  const filterProspects = (leads: Lead[]) => {
    return leads.filter((lead) => lead.isProspect);
  };

  return (
    <section className={styles['container']}>
      <Leads leads={leads} />
      <Prospects prospects={prospects} />
    </section>
  );
};

export default SalesPipelineFeatureProspects;
