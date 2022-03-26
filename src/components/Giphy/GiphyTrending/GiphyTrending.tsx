import { GiphyFetch } from '@giphy/js-fetch-api';
import { useState } from 'react';
import { Grid } from '@giphy/react-components';
import { useMeasure } from 'react-use';
import ResizeObserver from 'react-resize-observer';
import GiphyItemOverlay from '../GiphyItemOverlay/GiphyItemOverlay';

const giphyFetch = new GiphyFetch(import.meta.env.VITE_GIPHY_API as string);

const GiphyTrending = () => {
	const [columns, setColumns] = useState(4);
	const [ref, { width: containerWidth }] = useMeasure<HTMLDivElement>();
	const fetchGifs = (offset: number) =>
		giphyFetch.trending({ offset, limit: 10 });
	return (
		<div className="container mx-auto max-w-7xl px-4 mt-6" ref={ref}>
			<Grid
				onGifClick={(gif, e) => {
					console.log('gif', gif);
					e.preventDefault();
				}}
				fetchGifs={fetchGifs}
				width={containerWidth}
				columns={columns}
				gutter={6}
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
	);
};

export default GiphyTrending;
