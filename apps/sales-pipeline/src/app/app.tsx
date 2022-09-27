import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import { SalesPipelineFeatureConvert } from '@sales-pipeline/sales-pipeline/feature-convert';
import { SalesPipelineFeatureHome } from '@sales-pipeline/sales-pipeline/feature-home';
import { SalesPipelineFeatureProspects } from '@sales-pipeline/sales-pipeline/feature-prospects';
import { Nav } from '@sales-pipeline/shared';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <div className={styles['app-container']}>
      <Nav />
      <Routes>
        <Route path="/" element={<SalesPipelineFeatureHome />} />
        <Route path="convert" element={<SalesPipelineFeatureConvert />} />
        <Route path="prospects" element={<SalesPipelineFeatureProspects />} />
      </Routes>
    </div>
  );
}

export default App;
