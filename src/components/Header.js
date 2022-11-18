import React from 'react';
import { NavLink } from 'react-router-dom';
// Import des images :
import logoKasa from '../assets/images/kasa-logo.png';

const Header = () => {
	return (
		<header>
			<img src={logoKasa} alt="logo du site" />
			<nav>
				<ul className="desk-navbar">
					<li className="desk-navbar__link">
						<NavLink to="/home">Accueil</NavLink>
					</li>
					<li className="desk-navbar__link">
						<NavLink to="/a-propos">A Propos</NavLink>
					</li>
				</ul>
				<ul className="mobile-navbar">
					<li className="mobile-navbar__link">
						<NavLink to="/home">ACCUEIL</NavLink>
					</li>
					<li className="mobile-navbar__link">
						<NavLink to="/a-propos">A PROPOS</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
