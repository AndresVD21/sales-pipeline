import { render } from '@testing-library/react';

import ConvertProcess from './convert-process';

describe('ConvertProcess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConvertProcess />);
    expect(baseElement).toBeTruthy();
  });
});
