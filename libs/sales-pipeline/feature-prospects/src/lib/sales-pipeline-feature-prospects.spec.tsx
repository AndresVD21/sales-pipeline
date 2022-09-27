import { render } from '@testing-library/react';

import SalesPipelineFeatureProspects from './sales-pipeline-feature-prospects';

describe('SalesPipelineFeatureProspects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SalesPipelineFeatureProspects />);
    expect(baseElement).toBeTruthy();
  });
});
