import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './loading.module.scss';
/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <div className={styles['loading__container']}>
      <FontAwesomeIcon
        className={styles['loading__icon']}
        icon={faSync}
        spin={true}
        size="4x"
      />
      <p className={styles['loading__text']}>
        The score is being processed please wait!
      </p>
    </div>
  );
}

export default Loading;
