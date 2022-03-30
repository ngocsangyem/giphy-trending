import {
	createContext,
	ReactNode,
	useCallback,
	useMemo,
	useState,
} from 'react';
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api';
import { SearchContextProviderProps, SearchContextType } from '@/@types/search';

const SearchContext = createContext({} as SearchContextType);

const emptyGifsResult = {
	data: [],
	pagination: { total_count: 0, count: 0, offset: 0 },
	meta: { status: 200, msg: 'OK', response_id: '' },
};

const SearchContextProvider = ({
	children,
	apiKey,
	initialTerm = '',
	shouldDefaultToTrending = true,
}: SearchContextProviderProps) => {
	const giphyFetch = useMemo(() => new GiphyFetch(apiKey), [apiKey]);
	const [term, setTerm] = useState<string>(initialTerm);
	const [isFetching, setIsFetching] = useState(false);
	const setSearch = useCallback((term: string) => setTerm(term), []);

	const searchKey = [term].filter((val) => !!val).join(' / ');

	const fetchGifs = useCallback(
		async (offset: number) => {
			setIsFetching(true);
			let result: GifsResult = emptyGifsResult;
			if (term) {
				result = await giphyFetch.search(term, {
					offset,
				});
			} else if (shouldDefaultToTrending) {
				result = await giphyFetch.trending({ offset });
			}
			setIsFetching(false);
			return result;
		},
		[giphyFetch, term]
	);

	return (
		<SearchContext.Provider
			value={{
				apiKey,
				term,
				setSearch,
				isFetching,
				fetchGifs,
				searchKey,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};

export { SearchContext, SearchContextProvider };
