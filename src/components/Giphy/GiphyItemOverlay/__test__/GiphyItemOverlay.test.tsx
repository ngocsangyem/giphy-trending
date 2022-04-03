import { render, screen } from '@testing-library/react';
import GiphyItemOverlay from '../GiphyItemOverlay';
import { giphyList } from '../../../../mocks/giphyList';

describe('GiphyItemOverlay', () => {
	it('should render overlay', () => {
		render(<GiphyItemOverlay gif={giphyList[0]} isHovered={true} />);
		expect(
			screen.getByText('Happy Birthday Bday GIF by MOODMAN')
		).toBeInTheDocument();
	});

	it('should render overlay with isHovered false', () => {
		render(<GiphyItemOverlay gif={giphyList[1]} isHovered={false} />);
		expect(
			screen.getByText('Woman Love GIF by ProBit Global')
		).toBeInTheDocument();
	});
});
