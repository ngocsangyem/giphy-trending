import { Dispatch, ReactNode } from "react";
import { GifsResult } from "@giphy/js-fetch-api";
import { IGif } from '@giphy/js-types';
import { IGifItem } from "./gif";

export type SearchBarType = {
	clear?: boolean;
};

export type SearchStateType = {
	giphyList: IGifItem[];
}

export enum SearchActionTypes {
	STORE = 'STORE',
	TOGGLE = 'TOGGLE',
}

export interface IStoreAction {
	type: SearchActionTypes.STORE;
	payload: IGifItem[];
}
export interface IToggleAction {
	type: SearchActionTypes.TOGGLE;
	id: string | number;
}

export type SearchAction = IStoreAction | IToggleAction;

export type SearchContextType = {
	apiKey: string;
	setSearch: (searchTerm: string) => void;
	term: string;
	isFetching: boolean;
	fetchGifs?: (offset: number) => Promise<GifsResult>;
	searchKey: string;
	giphyList: IGifItem[];
	dispatch: Dispatch<SearchAction>;
};

export type SearchContextProviderProps = {
	children: ReactNode;
	apiKey: string;
	initialTerm?: string;
	shouldDefaultToTrending?: boolean;
};