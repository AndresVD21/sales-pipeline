import styles from './prospect.module.scss';
import { Lead } from '@sales-pipeline/data';
import { LeadCard } from '@sales-pipeline/shared';

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
    <LeadCard lead={lead}>
      {lead.isProspect ? (
        <p className={styles['lead__already__prospect']}>
          This user is already a prospect!
        </p>
      ) : null}
    </LeadCard>
  ) : (
    <div className={styles['lead__not-found']}>
      <p className="not-found__text">{`Sorry the lead you are trying to search is not in out database.`}</p>
    </div>
  );
};

export default Prospect;
