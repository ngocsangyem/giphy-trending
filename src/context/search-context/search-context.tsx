import {
	createContext,
	ReactNode,
	useCallback,
	useMemo,
	useReducer,
	useState,
} from 'react';
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api';
import {
	SearchActionTypes,
	SearchContextProviderProps,
	SearchContextType,
	SearchStateType,
} from '@/@types/search';
import { searchReducer } from '@/reducers/search/searchReducer';

const defaultSearchState: SearchStateType = {
	giphyList: [],
};

const emptyGifsResult = {
	data: [],
	pagination: { total_count: 0, count: 0, offset: 0 },
	meta: { status: 200, msg: 'OK', response_id: '' },
};

const SearchContext = createContext<SearchContextType>({
	apiKey: '',
	setSearch: () => {},
	term: '',
	isFetching: true,
	searchKey: '',
	fetchGifs: () => Promise.resolve(emptyGifsResult),
	giphyList: [],
	dispatch: () => {},
});

const SearchContextProvider = ({
	children,
	apiKey,
	initialTerm = '',
	shouldDefaultToTrending = true,
}: SearchContextProviderProps) => {
	const [searchState, dispatchSearchAction] = useReducer(
		searchReducer,
		defaultSearchState
	);
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
			dispatchSearchAction({
				type: SearchActionTypes.STORE,
				payload: (result.data || []).map((gif) => ({
					...gif,
					liked: false,
				})),
			});
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
				giphyList: searchState.giphyList,
				dispatch: dispatchSearchAction,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};

export { SearchContext, SearchContextProvider };
