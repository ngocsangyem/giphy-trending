import { useContext, Fragment, useState, SyntheticEvent } from 'react';
import { GifOverlayProps, Grid } from '@giphy/react-components';
import ResizeObserver from 'react-resize-observer';
import { useMeasure } from '@ngocsangyem/react-use';
import { SearchContext } from '@/context/search-context/search-context';
import SearchBar from './SearchBar/SearchBar';
import GiphyItemOverlay from '../Giphy/GiphyItemOverlay/GiphyItemOverlay';
import loadingGif from '@/assets/img/nyancat-rainbow-cat.gif';
import { IGif } from '@giphy/js-types';
import { GifClickType } from '@/@types/gif';
import { SearchActionTypes } from '@/@types/search';

const Search = () => {
	const { fetchGifs, searchKey, isFetching, dispatch } = useContext(SearchContext);
	const [columns, setColumns] = useState(4);
	const [ref, { width: containerWidth }] = useMeasure<HTMLDivElement>();

	const handleLike = ({ gif, e }: GifClickType) => {
		if ((e.target as HTMLInputElement).id === `toggle-heart-${gif.id}`) {
			dispatch({ type: SearchActionTypes.TOGGLE, id: gif.id });
		}
	};

	const handleGifClick = (
		gif: IGif,
		e: SyntheticEvent<HTMLElement, Event>
	) => {
		handleLike({ gif, e });
	};

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
					onGifClick={handleGifClick}
					width={containerWidth}
					key={searchKey}
					columns={columns}
					noLink={true}
					fetchGifs={fetchGifs}
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
