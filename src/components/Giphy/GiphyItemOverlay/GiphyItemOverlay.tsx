import { GifOverlayProps } from "@giphy/react-components";
import { useState } from "react";
import styles from './GiphyItemOverlay.module.scss';

const GiphyItemOverlay = ({ gif, isHovered }: GifOverlayProps) => {
	const [checked, setChecked] = useState(false);
	return (
		<div
			className={`overlay absolute inset-0 transition ${
				isHovered ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div
				className={`bg-transparent border-0 p-0 absolute top-2 right-2 z-10 flex justify-center w-8 h-8 ${styles['like-btn']}`}
				onClick={() => setChecked(!checked)}
			>
				<input
					id={`toggle-heart-${gif.id}`}
					type="checkbox"
					checked={checked}
				/>
				<label htmlFor={`toggle-heart-${gif.id}`} aria-label="like">
					❤
				</label>
			</div>
			<div className="absolute inset-0 flex bg-overlay items-end justify-center p-2 text-white font-semibold">
				<span>{gif.title}</span>
			</div>
		</div>
	);
}

export default GiphyItemOverlay;