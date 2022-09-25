import { Lead } from '@sales-pipeline/data';

export const leads: Lead[] = [
  {
    id: '100',
    birthdate: new Date(1996, 2, 21).toJSON(),
    email: 'jane@company.co',
    firstName: 'Jane',
    lastName: 'Doe',
    hasScore: false,
    score: 0,
  },
  {
    id: '200',
    birthdate: new Date(1980, 1, 11).toJSON(),
    email: 'jack@company.co',
    firstName: 'Jack',
    lastName: 'Doe',
    hasScore: false,
    score: 0,
  },
  {
    id: '300',
    birthdate: new Date(1990, 11, 15).toJSON(),
    email: 'jim@company.co',
    firstName: 'Jim',
    lastName: 'Doe',
    hasScore: false,
    score: 0,
  },
  {
    id: '400',
    birthdate: new Date(1990, 11, 15).toJSON(),
    email: 'jill@company.co',
    firstName: 'Jill',
    lastName: 'Doe',
    hasScore: false,
    score: 0,
  },
  {
    id: '500',
    birthdate: new Date(1990, 11, 15).toJSON(),
    email: 'jill@company.co',
    firstName: 'Jill',
    lastName: 'Doe',
    hasScore: false,
    score: 0,
  },
];
