import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="Header__container">
				<h1 className="Header__title">
					<Link to="/">GitHub Searcher</Link>
				</h1>
			</div>
		</header>
	);
};

export default Header;
