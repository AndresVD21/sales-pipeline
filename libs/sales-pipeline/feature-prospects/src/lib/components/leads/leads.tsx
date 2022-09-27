import { Lead } from '@sales-pipeline/data';
import { LeadCard } from '@sales-pipeline/shared';
import styles from './leads.module.scss';

/* eslint-disable-next-line */
export interface LeadsProps {
  leads: Lead[];
}

export const Leads: React.FC<LeadsProps> = ({ leads }) => {
  return (
    <section>
      <h2 className={styles['container__title']}>Leads</h2>
      <hr />
      <ul className={styles['leads__list']}>
        {leads.map((lead) => (
          <li className={styles['leads__list__item']} key={lead.id}>
            <LeadCard lead={lead} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Leads;
