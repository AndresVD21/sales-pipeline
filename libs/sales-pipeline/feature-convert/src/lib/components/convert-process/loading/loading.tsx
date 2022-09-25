import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './loading.scss';
/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <div className="loading__container">
      <FontAwesomeIcon
        className="loading__icon"
        icon={faSync}
        spin={true}
        size="4x"
      />
      <p className="loading__text">The score is being processed</p>
    </div>
  );
}

export default Loading;
