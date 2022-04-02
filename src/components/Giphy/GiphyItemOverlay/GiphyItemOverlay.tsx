import { GifOverlayProps } from '@giphy/react-components';
import styles from './GiphyItemOverlay.module.scss';

const GiphyItemOverlay = ({ gif, isHovered, onClick }: GifOverlayProps) => {
	return (
		<div
			className={`overlay absolute inset-0 transition ${
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
