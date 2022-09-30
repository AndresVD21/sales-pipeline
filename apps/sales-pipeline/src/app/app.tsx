import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Nav } from '@sales-pipeline/shared';
import loadable from '@loadable/component';

const SalesPipelineFeatureHome = loadable(
  () => import('@sales-pipeline/sales-pipeline/feature-home'),
  { resolveComponent: (components) => components.SalesPipelineFeatureHome }
);

const SalesPipelineFeatureConvert = loadable(
  () => import('@sales-pipeline/sales-pipeline/feature-convert'),
  { resolveComponent: (components) => components.SalesPipelineFeatureConvert }
);

const SalesPipelineFeatureProspects = loadable(
  () => import('@sales-pipeline/sales-pipeline/feature-prospects'),
  { resolveComponent: (components) => components.SalesPipelineFeatureProspects }
);

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
