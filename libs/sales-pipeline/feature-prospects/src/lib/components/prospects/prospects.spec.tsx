import { render } from '@testing-library/react';

import Prospects from './prospects';

describe('Prospects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Prospects />);
    expect(baseElement).toBeTruthy();
  });
});
