import { Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import GiphyFavorite from './pages/GiphyFavorite/GiphyFavorite';
import Home from './pages/Home/Home';

function App() {
	return (
		<Fragment>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="favorite" element={<GiphyFavorite />} />
			</Routes>
		</Fragment>
	);
}

export default App;
