import styles from './app.module.scss';
import { SalesPipelineFeatureConvert } from '@sales-pipeline/sales-pipeline/feature-convert';
import { SalesPipelineFeatureHome } from '@sales-pipeline/sales-pipeline/feature-home';
import { Route, Routes } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <div className={styles['app-container']}>
      <Routes>
        <Route path="/" element={<SalesPipelineFeatureHome />} />
        <Route path="convert" element={<SalesPipelineFeatureConvert />} />
      </Routes>
    </div>
  );
}

export default App;
