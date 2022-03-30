import { FavoriteContextProvider } from "@/context/favorite-context/favorite-context";
import GiphyList from "@/components/Giphy/GiphyList/GiphyList";

const GiphyFavorite = () => {
	return (
		<FavoriteContextProvider>
			<GiphyList />
		</FavoriteContextProvider>
	)
}

export default GiphyFavorite;