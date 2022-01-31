import React from 'react';
import { render } from '@testing-library/react';

import Hello from './Hello';

describe('Button', () => {
	test('renders the Hello component', () => {
		render(<Hello message={'Hello'} />);
	});
});
