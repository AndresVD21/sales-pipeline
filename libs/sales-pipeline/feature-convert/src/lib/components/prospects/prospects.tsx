import './prospects.scss';
import { Lead } from '@sales-pipeline/data';
import { Emoji, Space } from '@sales-pipeline/shared';

/* eslint-disable-next-line */
export interface ProspectProps {
  lead: Lead | null;
  hasLeadSelected: boolean;
}

const Prospect: React.FC<ProspectProps> = ({ lead, hasLeadSelected }) => {
  const getBirthdayString = () => {
    const transformDate =
      lead && lead.birthdate ? new Date(lead.birthdate) : null;
    const day = `${transformDate?.getDate()}`;
    const month =
      transformDate?.toLocaleString('default', { month: 'short' }) || '';
    const year = `${transformDate?.getFullYear()}`;
    return `${day}/${month}/${year}`;
  };

  return !hasLeadSelected ? (
    <div className="lead__empty">Search for a lead!</div>
  ) : hasLeadSelected && lead ? (
    <div className="lead">
      <p className="lead__name">
        <span className="lead__firstname">{lead.firstName}</span>
        <Space />
        <span className="lead__lastname">{lead.lastName}</span>
      </p>
      <p className="lead__email">
        <Emoji emoji="📧" label="mail" /> {lead.email}
      </p>
      <p className="lead__birthday">
        <Emoji emoji="🎂" label="birthday" /> {getBirthdayString()}
      </p>
    </div>
  ) : (
    <div className="lead__not-found">
      <p className="not-found__text">Lead not found.</p>
    </div>
  );
};

export default Prospect;
