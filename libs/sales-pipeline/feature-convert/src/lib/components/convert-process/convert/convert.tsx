import { useState } from 'react';
import { Subject, takeUntil } from 'rxjs';
import { convertLeadIntoProspect } from '../../../services/convert.service';
import styles from './convert.module.scss';

/* eslint-disable-next-line */
export interface ConvertProps {}

export const Convert = (props: ConvertProps) => {
  const $destroy = new Subject<boolean>();

  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   return () => {
  //     $destroy.next(true);
  //     $destroy.unsubscribe();
  //   };
  // }, []);

  const convertLead = () => {
    convertLeadIntoProspect()
      .pipe(takeUntil($destroy))
      .subscribe((response) => {
        setMessage(response.message);
      });
  };

  return (
    <div className={styles['container']}>
      <button
        className={`${styles['button']} ${styles['fill']} ${styles['convert__button']}`}
        onClick={convertLead}
      >
        Convert Lead
      </button>
      <p className={styles['convert__message']}>{message}</p>
    </div>
  );
};

export default Convert;
