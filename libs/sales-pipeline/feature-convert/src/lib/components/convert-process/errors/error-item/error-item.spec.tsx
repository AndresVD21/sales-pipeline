import { render } from '@testing-library/react';

import ErrorItem from './error-item';

describe('ErrorItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorItem />);
    expect(baseElement).toBeTruthy();
  });
});
