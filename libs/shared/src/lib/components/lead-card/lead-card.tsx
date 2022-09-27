import { Lead } from '@sales-pipeline/data';
import { concatName, getBirthdayString } from '@sales-pipeline/utils';
import Emoji from '../emoji/emoji';
import styles from './lead-card.module.scss';

/* eslint-disable-next-line */
export interface LeadCardProps {
  lead: Lead;
  children?: JSX.Element | null;
}

export const LeadCard: React.FC<LeadCardProps> = ({ lead, children }) => {
  return (
    <div className={styles['lead__card']}>
      <p className={styles['lead__card__name']}>
        {concatName(lead.firstName, lead.lastName)}
      </p>
      <p className="lead__card__email">
        <Emoji emoji="📧" label="mail" /> {lead.email}
      </p>
      <p className="lead__card__birthday">
        <Emoji emoji="🎂" label="birthday" />{' '}
        {getBirthdayString(lead.birthdate)}
      </p>
      {children}
    </div>
  );
};

export default LeadCard;
