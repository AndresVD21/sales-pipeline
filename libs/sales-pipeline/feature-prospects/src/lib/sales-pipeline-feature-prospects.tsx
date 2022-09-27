import { Nav } from '@sales-pipeline/shared';
import styles from './sales-pipeline-feature-prospects.module.scss';

/* eslint-disable-next-line */
export interface SalesPipelineFeatureProspectsProps {}

export const SalesPipelineFeatureProspects: React.FC<
  SalesPipelineFeatureProspectsProps
> = (props: SalesPipelineFeatureProspectsProps) => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['container__title']}>Current Prospects</h1>
      <hr />
    </div>
  );
};

export default SalesPipelineFeatureProspects;
