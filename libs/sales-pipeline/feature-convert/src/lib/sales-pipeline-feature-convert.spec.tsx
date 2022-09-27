import { render } from '@testing-library/react';

import SalesPipelineFeatureConvert from './sales-pipeline-feature-convert';

describe('SalesPipelineFeatureConvert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SalesPipelineFeatureConvert />);
    expect(baseElement).toBeTruthy();
  });
});
