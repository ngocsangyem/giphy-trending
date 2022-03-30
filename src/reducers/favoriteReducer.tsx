import {
	FavoriteStateType,
	FavoriteAction,
	FavoriteActionTypes,
} from '@/@types/favorite';

const favoriteReducer = (state: FavoriteStateType, action: FavoriteAction) => {
	switch (action.type) {
		case FavoriteActionTypes.LIKE:
			return {
				totalFavorites: state.totalFavorites + 1,
				favoriteList: [...state.favoriteList, action.payload],
			}
		case FavoriteActionTypes.UNLIKE:
			return {
				totalFavorites: state.totalFavorites - 1,
				favoriteList: state.favoriteList.filter((gif) => gif.id !== action.id),
			}
		default:
			return state;
	}
};

export { favoriteReducer };
