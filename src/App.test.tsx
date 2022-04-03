import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

describe('App', () => {
	it('should render search bar', () => {
		render(
			<BrowserRouter>
				<App />{' '}
			</BrowserRouter>
		);
		expect(
			screen.getByPlaceholderText('Search your favorite gifs here...')
		).toBeInTheDocument();
	});
});
