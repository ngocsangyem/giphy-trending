import { GifOverlayProps } from '@giphy/react-components';
import { forwardRef, useState } from 'react';
import styles from './GiphyItemOverlay.module.scss';

const GiphyItemOverlay = ({ gif, isHovered, onClick }: GifOverlayProps) => {
	return (
		<div
			className={`overlay absolute inset-0 transition ${
				isHovered ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div
				className={`bg-transparent border-0 p-0 absolute top-2 right-2 z-10 flex justify-center w-8 h-8 ${styles['like-btn']}`}
				role="button"
			>
				<div className="relative flex justify-center w-8 h-8">
					<input id={`toggle-heart-${gif.id}`} type="checkbox" className='cursor-pointer absolute left-0 w-full h-full opacity-0 z-10 toggle-input' />
					<label
						htmlFor={`toggle-heart-${gif.id}`}
						aria-label="like"
						className="toggle-label"
					>
						❤
					</label>
				</div>
			</div>
			<div className="absolute inset-0 flex bg-overlay items-end justify-center p-2 text-white font-semibold">
				<span>{gif.title}</span>
			</div>
		</div>
	);
};

export default GiphyItemOverlay;
