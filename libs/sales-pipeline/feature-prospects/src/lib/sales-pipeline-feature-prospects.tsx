import { Lead } from '@sales-pipeline/data';
import { Emoji } from '@sales-pipeline/shared';
import { concatName, getBirthdayString } from '@sales-pipeline/utils';
import { useEffect, useState } from 'react';
import { Subject, takeUntil } from 'rxjs';
import styles from './sales-pipeline-feature-prospects.module.scss';
import { getProspectsFromData } from './services/prospects.service';

/* eslint-disable-next-line */
export interface SalesPipelineFeatureProspectsProps {}

export const SalesPipelineFeatureProspects: React.FC<
  SalesPipelineFeatureProspectsProps
> = (props: SalesPipelineFeatureProspectsProps) => {
  const $destroy = new Subject<boolean>();

  const [prospects, setProspects] = useState<Lead[]>([]);

  useEffect(() => {
    getProspectsList();
  }, []);

  const getProspectsList = () => {
    getProspectsFromData()
      .pipe(takeUntil($destroy))
      .subscribe(({ data }) => {
        setProspects(data ? [...data] : []);
      });
  };

  return (
    <div className={styles['container']}>
      <h1 className={styles['container__title']}>Current Prospects</h1>
      <hr />
      <ul className={styles['prospects__list']}>
        {prospects.map((prospect) => (
          <li className={styles['prospects__list__item']} key={prospect.id}>
            <div className={styles['prospect']}>
              <p className={styles['prospect__name']}>
                {concatName(prospect.firstName, prospect.lastName)}
              </p>
              <p className="prospect__email">
                <Emoji emoji="📧" label="mail" /> {prospect.email}
              </p>
              <p className="prospect__birthday">
                <Emoji emoji="🎂" label="birthday" />{' '}
                {getBirthdayString(prospect.birthdate)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesPipelineFeatureProspects;
