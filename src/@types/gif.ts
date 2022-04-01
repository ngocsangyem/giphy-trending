import { SyntheticEvent } from 'react';
import { IGif } from '@giphy/js-types';

export type GifClickType = {
	gif: IGif;
	e: SyntheticEvent<HTMLElement, Event>;
};

export interface IGifItem extends IGif {
	liked: boolean;
}