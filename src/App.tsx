import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { SearchContextProvider } from '@/context/search-context/search-context';

function App() {
	return (
		<Fragment>
			<Header></Header>
			<SearchContextProvider apiKey={import.meta.env.VITE_GIPHY_API as string}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</SearchContextProvider>
		</Fragment>
	);
}

export default App;
