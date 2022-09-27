import { render } from '@testing-library/react';

import Prospect from './prospect';

describe('Prospects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Prospect lead={null} hasLeadSelected={false} leadNotFound={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});
