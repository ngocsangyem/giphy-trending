import { createContext, useReducer } from 'react';
import { IGif } from '@giphy/js-types';
import {
	FavoriteActionTypes,
	FavoriteContextProviderProps,
	FavoriteContextType,
	FavoriteStateType,
} from '@/@types/favorite';
import { favoriteReducer } from '@/reducers/favoriteReducer';

const defaultFavoriteState: FavoriteStateType = {
	favoriteList: [],
	totalFavorites: 0,
};

const FavoriteContext = createContext<FavoriteContextType>({
	favoriteList: [],
	totalFavorites: 0,
	addFavorite: (gif: IGif) => {},
	removeFavorite: (gif: IGif) => {},
});

const FavoriteContextProvider = ({
	children,
}: FavoriteContextProviderProps) => {
	const [favoriteState, dispatchFavoriteAction] = useReducer(
		favoriteReducer,
		defaultFavoriteState
	);

	const addFavorite = (gif: IGif) => {
		console.log('addFavorite', gif);
		
		dispatchFavoriteAction({
			type: FavoriteActionTypes.LIKE,
			payload: gif,
		});
	};

	const removeFavorite = (gif: IGif) => {
		console.log('removeFavorite', gif);

		dispatchFavoriteAction({
			type: FavoriteActionTypes.UNLIKE,
			id: gif.id,
		});
	};

	return (
		<FavoriteContext.Provider
			value={{
				favoriteList: favoriteState.favoriteList,
				totalFavorites: favoriteState.totalFavorites,
				addFavorite: addFavorite,
				removeFavorite: removeFavorite,
			}}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

export { FavoriteContext, FavoriteContextProvider };
