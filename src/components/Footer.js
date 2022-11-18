// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React from 'react';
// (Images)
import logoKasaFooter from '../assets/images/kasa-logo-footer.png';

// --------------------
// Contenu du composant
// --------------------
const Footer = () => {
	return (
		<footer>
			<img src={logoKasaFooter} alt="logo du site" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
