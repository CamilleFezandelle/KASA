// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React from 'react';
import { NavLink } from 'react-router-dom';
// (Images)
import logoKasa from '../assets/images/kasa-logo.png';

// --------------------
// Contenu du composant
// --------------------
const Header = () => {
	return (
		<header>
			{/* Logo */}
			<img src={logoKasa} alt="logo du site" />
			{/* Barre de navigation */}
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
