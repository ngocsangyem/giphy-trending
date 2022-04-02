import {
	SearchStateType,
	SearchAction,
	SearchActionTypes,
} from '@/@types/search';

const searchReducer = (state: SearchStateType, action: SearchAction) => {
	switch (action.type) {
		case SearchActionTypes.STORE:
			return {
				...state,
				giphyList: action.payload,
			};
		default:
			return state;
	}
};

export { searchReducer };
