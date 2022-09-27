import { Lead, Registry } from '@sales-pipeline/data';

/**
 *
 * @param leadFoundInRegistry Lead found in the DB
 * @param leadEntered Lead you want to process
 * @returns true if they are equals false when there is any discrepancy
 */
export const compareLeads = (
  leadFoundInRegistry: Registry,
  leadEntered: Lead
) => {
  for (const propery in leadFoundInRegistry) {
    if (
      leadFoundInRegistry[propery as keyof Registry] !==
      leadEntered[propery as keyof Registry]
    ) {
      return false;
    }
  }
  return true;
};

export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getBirthdayString = (textBirthday: string) => {
  const transformDate = new Date(textBirthday);
  const day = `${transformDate?.getDate()}`;
  const month =
    transformDate?.toLocaleString('default', { month: 'short' }) || '';
  const year = `${transformDate?.getFullYear()}`;
  return `${day}/${month}/${year}`;
};

export const concatName = (firstName: string, lastName: string) => {
  return [firstName, lastName].join(' ');
};
