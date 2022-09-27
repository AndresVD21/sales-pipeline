import { Lead } from '@sales-pipeline/data';
import { LeadCard } from '@sales-pipeline/shared';
import styles from './prospects.module.scss';

/* eslint-disable-next-line */
export interface ProspectsProps {
  prospects: Lead[];
}

export const Prospects: React.FC<ProspectsProps> = ({ prospects }) => {
  return (
    <section>
      <h2 className={styles['container__title']}>Prospects</h2>
      <hr />
      <ul className={styles['prospects__list']}>
        {prospects.map((prospect) => (
          <li className={styles['prospects__list__item']} key={prospect.id}>
            <LeadCard lead={prospect} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Prospects;
