import logo from '../../assets/img/Giphy-logo.svg';
import CustomLink from './CustomLink/CustomLink';

const Header = () => {
	return (
		<header className="header">
			<div className="my-10 w-40 mx-auto">
				<img src={logo} alt="giphy logo" />
			</div>
			<nav className="mb-5">
				<ul className="flex justify-center">
					<li>
						<CustomLink to="/">Home</CustomLink>
					</li>
					<li>
						<CustomLink to="/favorite">Favorite</CustomLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
