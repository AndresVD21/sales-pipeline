import { render } from '@testing-library/react';

import SalesPipelineFeatureHome from './sales-pipeline-feature-home';

describe('SalesPipelineFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SalesPipelineFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
