import { ReactNode } from 'react';
import { IGif } from '@giphy/js-types';

export type FavoriteStateType = {
	favoriteList: IGif[];
	totalFavorites: number;
}

export enum FavoriteActionTypes {
	LIKE = 'LIKE',
	UNLIKE = 'UNLIKE',
}

export interface ILikeAction {
	type: FavoriteActionTypes.LIKE;
	payload: IGif;
}

export interface IUnlikeAction {
	type: FavoriteActionTypes.UNLIKE;
	id: string | number;
}

export type FavoriteAction = ILikeAction | IUnlikeAction;

export type FavoriteContextType = {
	favoriteList: IGif[];
	totalFavorites: number;
	addFavorite: (gif: IGif) => void;
	removeFavorite: (gif: IGif) => void;
};

export type FavoriteContextProviderProps = {
	children: ReactNode;
	favoriteList?: IGif[];
	totalFavorites?: number;
};
