import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../Search';

jest.mock('@giphy/react-components', () => ({
	...jest.requireActual('@giphy/react-components'),
	Grid: jest.fn(({onGifClick}) => <button onClick={onGifClick}>Grid</button>),
}));

describe('Search', () => {
	it('should render search bar', () => {
		render(<Search />);
		expect(
			screen.getByPlaceholderText('Search your favorite gifs here...')
		).toBeInTheDocument();
	});

	it('should run handleGifClick when gif is clicked', async () => {
		// const handleGifClick = jest.fn();
		const { container } = render(<Search />);
		const button = container.querySelector('button')
		fireEvent.keyDown(button as Element);
	});
});
