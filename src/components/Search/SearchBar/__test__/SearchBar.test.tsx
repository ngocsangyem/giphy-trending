import React, { useState as useStateMock } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';
import { useDebounce } from '@ngocsangyem/react-use';

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
}));
jest.mock('@ngocsangyem/react-use', () => {
	return {
		useDebounce: jest.fn((value) => [value]),
	};
});

describe('SearchBar', () => {
	const setCleared = jest.fn();
	const setDebouncedTerm = jest.fn();
	beforeEach(() => {
		jest.useFakeTimers();
		(useStateMock as jest.Mock)
			.mockImplementationOnce((init) => [init, setCleared])
			.mockImplementationOnce((init) => [init, setDebouncedTerm]);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render search bar', () => {
		render(<SearchBar />);
		expect(
			screen.getByPlaceholderText('Search your favorite gifs here...')
		).toBeInTheDocument();
	});

	it('should render with empty value when clear is true', () => {
		render(<SearchBar clear />);
		expect(
			screen.getByPlaceholderText('Search your favorite gifs here...')
		).toHaveValue('');
	});

	it('should render with term value when clear is false', () => {
		jest.spyOn(React, 'useContext').mockImplementation(() => ({
			term: 'test',
		}));
		render(<SearchBar clear={false} />);
		expect(
			screen.getByPlaceholderText('Search your favorite gifs here...')
		).toHaveValue('test');
	});

	it('should call setCleared when input value changes', () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText(
			'Search your favorite gifs here...'
		);
		userEvent.type(input, 'test');
		expect(setCleared).toHaveBeenCalled();
		expect(setDebouncedTerm).toHaveBeenCalled();
	});

	it('should call setCleared and setDebouncedTerm through clear prop is true', () => {
		render(<SearchBar clear={true} />);
		const input = screen.getByPlaceholderText(
			'Search your favorite gifs here...'
		);
		userEvent.type(input, ' ');
		expect(setCleared).toHaveBeenCalledTimes(1);
		expect(setDebouncedTerm).toHaveBeenCalledTimes(1);
	});

	it('should call useDebounce', () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText(
			'Search your favorite gifs here...'
		);
		userEvent.type(input, 'test');
		expect(useDebounce).toHaveBeenCalled();
	})
});
