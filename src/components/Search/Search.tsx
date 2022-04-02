import { useContext, Fragment, useState } from 'react';
import { Grid } from '@giphy/react-components';
import ResizeObserver from 'react-resize-observer';
import { useMeasure } from '@ngocsangyem/react-use';
import { SearchContext } from '@/context/search-context/search-context';
import SearchBar from './SearchBar/SearchBar';
import GiphyItemOverlay from '../Giphy/GiphyItemOverlay/GiphyItemOverlay';
import loadingGif from '@/assets/img/nyancat-rainbow-cat.gif';
import { GifsResult } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import Modal from '../common/Modal/Modal';

const Search = () => {
	const { fetchGifs, searchKey, isFetching } = useContext(SearchContext);
	const [modalGif, setModalGif] = useState<IGif | null>(null);
	const [columns, setColumns] = useState(4);
	const [ref, { width: containerWidth }] = useMeasure<HTMLDivElement>();

	const handleCloseModal = () => {
		setModalGif(null);
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
					onGifClick={(gif, e) => {
						console.log('gif', gif);
						e.preventDefault();
						setModalGif(gif);
					}}
					width={containerWidth}
					key={searchKey}
					columns={columns}
					noLink={true}
					fetchGifs={
						fetchGifs as (offset: number) => Promise<GifsResult>
					}
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
			{modalGif && (
				<Modal title={modalGif.title} onClose={handleCloseModal}>
					<div className='flex flex-col md:flex-row'>
					<img
						width={modalGif.images.original.width}
						height={modalGif.images.original.height}
						src={modalGif.images.original.url}
						alt={modalGif.title}
					/>
					<div className='mt-4 md:ml-4 md:mt-0'>
						<span className='block'>username: {modalGif.username ? modalGif.username : 'Unknown'}</span>
						<span className='block'>rating: {modalGif.rating}</span>
						<span className='block'>Upload date: {modalGif.import_datetime.split(' ')[0]}</span>
					</div>
					</div>
				</Modal>
			)}
		</Fragment>
	);
};

export default Search;
