import { Lead } from '@sales-pipeline/data';
import { of } from 'rxjs';

const leads: Lead[] = [
  {
    id: '100',
    birthdate: new Date(1996, 2, 21),
    email: 'jane@company.co',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: '200',
    birthdate: new Date(1980, 1, 11),
    email: 'jane@company.co',
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: '300',
    birthdate: new Date(1990, 11, 15),
    email: 'jane@company.co',
    firstName: 'Jim',
    lastName: 'Doe',
  },
];

export const getLeads = () => {
  return of(leads);
};

export const getLead = (id: string) => {
  const leadFound = leads.find((lead) => lead.id === id);
  return of(leadFound);
};
