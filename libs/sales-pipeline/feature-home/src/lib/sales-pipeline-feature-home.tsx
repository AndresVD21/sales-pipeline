import { Emoji, Nav, Space } from '@sales-pipeline/shared';
import { useNavigate } from 'react-router-dom';
import styles from './sales-pipeline-feature-home.module.scss';

/* eslint-disable-next-line */
export interface SalesPipelineFeatureHomeProps {}

export const SalesPipelineFeatureHome: React.FC<
  SalesPipelineFeatureHomeProps
> = (props: SalesPipelineFeatureHomeProps) => {
  const navigate = useNavigate();

  const goToConvert = () => {
    navigate('/convert');
  };

  return (
    <>
      <Nav />
      <main className={styles['container']}>
        <h1 className={styles['container__title']}>
          Welcome to Sales Pipeline!
        </h1>
        <section className={styles['introduction']}>
          <p className={styles['introduction__text']}>
            Hi! Start the process to convert prospects below
            <Space />
            <Emoji emoji="👇🏾" label="hand pointing down" />
          </p>
          <button
            className={`${styles['introduction__button']} ${styles['fill']}`}
            onClick={goToConvert}
          >
            Process Lead
          </button>
        </section>
      </main>
    </>
  );
};

export default SalesPipelineFeatureHome;
