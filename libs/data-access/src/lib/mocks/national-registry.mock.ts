import { Registry } from '@sales-pipeline/data';

export const nationalRegistry: Registry[] = [
  {
    id: '100',
    birthdate: new Date(1996, 2, 21).toJSON(),
    email: 'jane@company.co',
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: '200',
    birthdate: new Date(1980, 1, 11).toJSON(),
    email: 'jack@company.co',
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: '300',
    birthdate: new Date(1980, 1, 11).toJSON(),
    email: 'jim1@company.co',
    firstName: 'Jim',
    lastName: 'Doe',
  },
];
