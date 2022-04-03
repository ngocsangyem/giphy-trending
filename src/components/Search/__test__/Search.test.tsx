import React, { useState as useStateMock } from 'react';
import { render, screen, createEvent, fireEvent } from '@testing-library/react';
import Search from '../Search';
import userEvent from '@testing-library/user-event';

// jest.mock('@giphy/react-components', () => ({
// 	...jest.requireActual('@giphy/react-components'),
// 	Grid: jest.fn(() => <div>Grid</div>),
// }));

describe('Search', () => {
	it('should render search bar', () => {
		render(<Search />);
		expect(
			screen.getByPlaceholderText('Search your favorite gifs here...')
		).toBeInTheDocument();
	});

	it('should run handleGifClick when gif is clicked', () => {
		// const handleGifClick = jest.fn();
		const { container } = render(<Search />);
		fireEvent.click(container.querySelector('.grid-item'));
		screen.debug(container)
	});
});
