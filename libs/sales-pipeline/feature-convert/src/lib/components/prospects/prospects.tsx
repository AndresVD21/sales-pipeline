import './prospects.scss';
import { Lead } from '@sales-pipeline/data';
import { Emoji, Space } from '@sales-pipeline/shared';

/* eslint-disable-next-line */
export interface ProspectProps {
  lead: Lead | undefined;
}

const Prospect: React.FC<ProspectProps> = ({ lead }) => {
  const getBirthdayString = () => {
    const day = `${lead?.birthdate.getDate()}`;
    const month =
      lead?.birthdate.toLocaleString('default', { month: 'short' }) || '';
    const year = `${lead?.birthdate.getFullYear()}`;
    return `${day}/${month}/${year}`;
  };

  return lead ? (
    <div className="lead">
      <p className="lead__name">
        <span className="lead__firstname">{lead.firstName}</span>
        <Space />
        <span className="lead__lastname">{lead.lastName}</span>
      </p>
      <p className="lead__email">
        <Emoji emoji="📧" /> {lead.email}
      </p>
      <p className="lead__birthday">
        <Emoji emoji="🎂" /> {getBirthdayString()}
      </p>
    </div>
  ) : (
    <div className="lead__not-found">
      <p className="not-found__text">Lead not found.</p>
    </div>
  );
};

export default Prospect;
