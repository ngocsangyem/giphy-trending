import { SearchContext } from '@/context/search-context/search-context';
import { useDebounce } from '@ngocsangyem/react-use';
import { useContext, useEffect, useState } from 'react';
import StandardInput from '@/components/common/StandardInput/StandardInput';
import { SearchBarType } from '@/@types/search';

const SEARCH_DEBOUNCE = 500;

const SearchBar = ({ clear = false }: SearchBarType) => {
	const { setSearch, term } = useContext(SearchContext);
	const [debouncedTerm, setDebouncedTerm] = useState<string>(term);
	const [isCleared, setCleared] = useState(clear);

	useDebounce(() => setSearch(debouncedTerm), SEARCH_DEBOUNCE, [
		debouncedTerm,
	]);

	useEffect(() => {
		setDebouncedTerm(term);
	}, [term]);

	useEffect(() => {
		setCleared(clear);
	}, [clear]);

	return (
		<div className="container mx-auto max-w-2xl px-4">
			<StandardInput
				name="search"
				type="text"
				placeholder="Search your favorite gifs here..."
				value={isCleared ? '' : debouncedTerm}
				onChange={(e) => {
					const { value } = e.target;
					if (!isCleared || value.trim() !== '') {
						setCleared(false);
						setDebouncedTerm(e.target.value);
					}
				}}
			></StandardInput>
		</div>
	);
};

export default SearchBar;
