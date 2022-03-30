import { FavoriteContext } from "@/context/favorite-context/favorite-context";
import { useContext } from "react";

const GiphyList = () => {
	const { favoriteList } = useContext(FavoriteContext);
	console.log('favoriteList', favoriteList);
	
	return (
		<div className="giphy-list">
			{favoriteList.map((giphy) => (
				<div>{giphy.title}</div>
			))}
		</div>
	);
};

export default GiphyList;
