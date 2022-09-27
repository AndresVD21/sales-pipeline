import styles from './prospect.module.scss';
import { Lead } from '@sales-pipeline/data';
import { Emoji, Space } from '@sales-pipeline/shared';
import { getBirthdayString } from '@sales-pipeline/utils';

/* eslint-disable-next-line */
export interface ProspectProps {
  lead: Lead | null;
  hasLeadSelected: boolean;
  leadNotFound: boolean;
}

const Prospect: React.FC<ProspectProps> = ({
  lead,
  hasLeadSelected,
  leadNotFound,
}) => {
  return !hasLeadSelected && !leadNotFound ? (
    <p className={styles['lead__empty']}>Search for a lead!</p>
  ) : hasLeadSelected && lead && !leadNotFound ? (
    <div className={styles['lead']}>
      <p className={styles['lead__name']}>
        <span className="lead__firstname">{lead.firstName}</span>
        <Space />
        <span className="lead__lastname">{lead.lastName}</span>
      </p>
      <p className="lead__email">
        <Emoji emoji="📧" label="mail" /> {lead.email}
      </p>
      <p className="lead__birthday">
        <Emoji emoji="🎂" label="birthday" />{' '}
        {getBirthdayString(lead.birthdate)}
      </p>
      {lead.isProspect ? (
        <p className={styles['lead__already__prospect']}>
          This user is already a prospect!
        </p>
      ) : null}
    </div>
  ) : (
    <div className={styles['lead__not-found']}>
      <p className="not-found__text">{`Sorry the lead you are trying to search is not in out database.`}</p>
    </div>
  );
};

export default Prospect;
