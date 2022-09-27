import { render } from '@testing-library/react';

import LeadCard from './lead-card';

describe('LeadCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeadCard />);
    expect(baseElement).toBeTruthy();
  });
});
