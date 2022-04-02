import { useContext, Fragment, useState } from 'react';
import { Grid } from '@giphy/react-components';
import ResizeObserver from 'react-resize-observer';
import { useMeasure } from '@ngocsangyem/react-use';
import { SearchContext } from '@/context/search-context/search-context';
import SearchBar from './SearchBar/SearchBar';
import GiphyItemOverlay from '../Giphy/GiphyItemOverlay/GiphyItemOverlay';
import loadingGif from '@/assets/img/nyancat-rainbow-cat.gif';
import { GifsResult } from '@giphy/js-fetch-api';

const Search = () => {
	const { fetchGifs, searchKey, isFetching, dispatch } = useContext(SearchContext);
	const [columns, setColumns] = useState(4);
	const [ref, { width: containerWidth }] = useMeasure<HTMLDivElement>();

	return (
		<Fragment>
			<SearchBar />
			<div className="container mx-auto max-w-7xl px-4 mt-6" ref={ref}>
				{isFetching && (
					<div className="flex justify-center">
						<img src={loadingGif} alt="loading cat" />
					</div>
				)}
				<Grid
					width={containerWidth}
					key={searchKey}
					columns={columns}
					noLink={true}
					fetchGifs={fetchGifs as (offset: number) => Promise<GifsResult>}
					overlay={GiphyItemOverlay}
				/>
				<ResizeObserver
					onResize={({ width }) => {
						if (width < 768) {
							setColumns(2);
						} else if (width < 992) {
							setColumns(3);
						} else {
							setColumns(4);
						}
					}}
				/>
			</div>
		</Fragment>
	);
};

export default Search;
