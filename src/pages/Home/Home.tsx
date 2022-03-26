import { Fragment } from "react";
import GiphyTrending from "@/components/Giphy/GiphyTrending/GiphyTrending";
import Search from "@/components/Search/Search";

const Home = () => {
	return (
		<Fragment>
			<Search></Search>
			<GiphyTrending></GiphyTrending>
		</Fragment>
	);
};

export default Home;
