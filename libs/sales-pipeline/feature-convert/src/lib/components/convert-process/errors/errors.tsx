import { Error } from '@sales-pipeline/data';
import ErrorItem from './error-item/error-item';
import styles from './errors.module.scss';

/* eslint-disable-next-line */
export interface ErrorsProps {
  requestErrors: Error[];
  systemsErrors: Error[];
}

export const Errors: React.FC<ErrorsProps> = ({
  requestErrors,
  systemsErrors,
}) => {
  return (
    <div className={styles['errors']}>
      <h2 className={styles['errors__text']}>Process Failed</h2>
      {requestErrors.length > 0 &&
        requestErrors.map((reqError) => <ErrorItem error={reqError} />)}
      {systemsErrors.length > 0 &&
        systemsErrors.map((sysError) => <ErrorItem error={sysError} />)}
    </div>
  );
};

export default Errors;
