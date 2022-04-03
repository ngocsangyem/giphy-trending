import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
	it('should render search bar', () => {
		render(<Home />);
		expect(
			screen.getByPlaceholderText('Search your favorite gifs here...')
		).toBeInTheDocument();
	});
});