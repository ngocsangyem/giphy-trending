import logo from '../../assets/img/Giphy-logo.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="my-10 w-40 mx-auto">
				<img src={logo} alt="giphy logo" />
			</div>
		</header>
	);
};

export default Header;
