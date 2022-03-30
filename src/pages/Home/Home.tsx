import { Fragment } from 'react';
import Search from '@/components/Search/Search';
import { SearchContextProvider } from '@/context/search-context/search-context';

const Home = () => {
	return (
		<Fragment>
			<SearchContextProvider apiKey={import.meta.env.VITE_GIPHY_API as string}>
				<Search />
			</SearchContextProvider>
		</Fragment>
	);
};

export default Home;
