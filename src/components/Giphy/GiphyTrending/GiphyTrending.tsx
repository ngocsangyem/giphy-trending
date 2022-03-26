import { GiphyFetch } from '@giphy/js-fetch-api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { GifOverlayProps, Grid } from '@giphy/react-components';
import { useMeasure } from 'react-use';
import ResizeObserver from 'react-resize-observer';

const giphyFetch = new GiphyFetch(import.meta.env.VITE_GIPHY_API as string);

const Overlay = ({ gif, isHovered }: GifOverlayProps) => {
	return (
		<div
			className={`overlay absolute inset-0 transition ${
				isHovered ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<button className="bg-transparent border-0 p-0 absolute top-2 right-2 z-10">
			</button>
			<div className="absolute inset-0 flex bg-overlay items-end justify-center p-2 text-white font-semibold">
				<span>{gif.title}</span>
			</div>
		</div>
	);
};

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
				overlay={Overlay}
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
