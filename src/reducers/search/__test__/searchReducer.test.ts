import { searchReducer } from '../searchReducer';
import { giphyList } from '../../../mocks/giphyList';

describe('searchReducer', () => {
	it('should return the initial state when passed an empty action', () => {
		const initialState = {
			giphyList
		};
		const action = {type: ''};
		const expected = initialState;
		// @ts-ignore
		const result = searchReducer(initialState, action);
		expect(result).toEqual(expected);
	});

	it('should store giphy list to state after search or fetch', () => {
		const initialState = {
			giphyList
		};
		const action = {
			type: 'STORE',
			payload: [
				{
					id: '1',
					title: 'test',
					images: {
						fixed_height: {
							url: 'test'
						}
					}
				}
			]
		};
		const state = {
			giphyList: [
				{
					id: '1',
					title: 'test',
					images: {
						fixed_height: {
							url: 'test'
						}
					}
				}
			]
		};
		// @ts-ignore
		const result = searchReducer(initialState, action);
		expect(result).toEqual(state);
	})
});
