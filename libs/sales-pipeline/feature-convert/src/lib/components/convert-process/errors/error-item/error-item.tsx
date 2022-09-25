import { Error } from '@sales-pipeline/data';
import { Emoji } from '@sales-pipeline/shared';
import styles from './error-item.module.scss';

/* eslint-disable-next-line */
export interface ErrorItemProps {
  error: Error;
}

export const ErrorItem: React.FC<ErrorItemProps> = ({ error }) => {
  return (
    <div className={styles['error__item']}>
      <Emoji emoji="❌" label="red cross mark" />
      <p className={styles['error__item__text']}>{error.message}</p>
    </div>
  );
};

export default ErrorItem;
