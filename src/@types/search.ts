import { ReactNode } from "react";
import { GifsResult } from "@giphy/js-fetch-api";

export type SearchBarType = {
	clear?: boolean;
};

export type SearchContextType = {
	apiKey: string;
	setSearch: (searchTerm: string) => void;
	term: string;
	isFetching: boolean;
	fetchGifs: (offset: number) => Promise<GifsResult>;
	searchKey: string;
};

export type SearchContextProviderProps = {
	children: ReactNode;
	apiKey: string;
	initialTerm?: string;
	shouldDefaultToTrending?: boolean;
};