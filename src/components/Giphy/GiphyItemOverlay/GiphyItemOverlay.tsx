import { GifOverlayProps } from '@giphy/react-components';

const GiphyItemOverlay = ({ gif, isHovered }: GifOverlayProps) => {
	return (
		<div
			className={`overlay cursor-pointer absolute inset-0 transition ${
				isHovered ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="absolute inset-0 flex bg-overlay items-end justify-center p-2 text-white font-semibold">
				<span>{gif.title}</span>
			</div>
		</div>
	);
};

export default GiphyItemOverlay;
