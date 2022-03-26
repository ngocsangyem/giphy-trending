import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="header__menu">
				<ul className="header__menu-list">
					<li className="header__menu-item">
						<Link to="/">Home</Link>
					</li>
					<li className="header__menu-item">
						<Link to="/about">Your favorite</Link>
					</li>
					<li className="header__menu-item">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};
