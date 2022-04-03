import { render, screen, fireEvent } from '@testing-library/react';
import { useContext } from 'react';
import { SearchContext, SearchContextProvider } from '../search-context';

// @ts-ignore
const customRender = (ui, { providerProps, ...renderOptions }) => {
	return render(
		<SearchContext.Provider {...providerProps}>
			{ui}
		</SearchContext.Provider>,
		renderOptions
	);
};

describe('Search context', () => {
	const TestComponent = () => {
		const { giphyList, isFetching, setSearch } = useContext(SearchContext);
		return (
			<div>``
				{isFetching && <div role="user">{giphyList[0].title}</div>}
				<input type="text" onChange={() => setSearch} />
			</div>
		);
	};
	it('should be defined', () => {
		expect(SearchContext).toBeDefined();
	});

	it('should be a context', () => {
		expect(SearchContext.Provider).toBeDefined();
		expect(SearchContext.Consumer).toBeDefined();
	});

	it('should use context', () => {
		const providerProps = {
			first: 'Boba',
			last: 'Fett',
		};

		const { container } = render(
			<SearchContextProvider apiKey="wqfbjweqvfvewq">
				<TestComponent />
			</SearchContextProvider>
		);

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
	});
});
