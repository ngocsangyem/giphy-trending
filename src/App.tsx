import { Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import GiphyFavorite from './pages/GiphyFavorite/GiphyFavorite';
import Home from './pages/Home/Home';
import logo from './assets/img/Giphy-logo.svg';

function App() {
	return (
		<Fragment>
			<div className='my-10 w-40 mx-auto'>
				<img src={logo} alt="giphy logo" />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="favorite" element={<GiphyFavorite />} />
			</Routes>
		</Fragment>
	);
}

export default App;
