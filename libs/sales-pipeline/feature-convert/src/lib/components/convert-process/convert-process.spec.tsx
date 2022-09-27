import { render } from '@testing-library/react';

import ConvertProcess from './convert-process';

describe('ConvertProcess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ConvertProcess
        isProspect={false}
        score={{ score: 10, requestErrors: [], systemsErrors: [] }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
