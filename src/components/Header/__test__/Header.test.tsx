import { render } from '@testing-library/react';
import Header from '../Header';

describe('SearchBar', () => {
	it('should render header', () => {
		const { container } = render(<Header />);
		expect(container.querySelector('img')).toBeInTheDocument();
	});
});
