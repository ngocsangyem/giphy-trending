import StandardInput from '../common/StandardInput/StandardInput';

const Search = () => {
	return (
		<div className="container mx-auto max-w-2xl px-4">
			<StandardInput name="search" type="text" placeholder='Search your favorite gifs here...'></StandardInput>
		</div>
	);
};

export default Search;
