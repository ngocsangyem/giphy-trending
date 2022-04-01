import {
	SearchStateType,
	SearchAction,
	SearchActionTypes,
} from '@/@types/search';

const searchReducer = (state: SearchStateType, action: SearchAction) => {
	switch (action.type) {
		case SearchActionTypes.TOGGLE:
			const id = state.giphyList.findIndex((gif) => gif.id === action.id);
			const newGiphyList = [...state.giphyList];
			newGiphyList[id].liked = !newGiphyList[id].liked;
			console.log('toggle');
			return {
				giphyList: newGiphyList,
			};
		case SearchActionTypes.STORE:
			return {
				giphyList: action.payload,
			};
		default:
			return state;
	}
};

export { searchReducer };
