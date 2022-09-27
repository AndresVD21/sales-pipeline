import { render } from '@testing-library/react';

import Leads from './leads';

describe('Leads', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Leads />);
    expect(baseElement).toBeTruthy();
  });
});
