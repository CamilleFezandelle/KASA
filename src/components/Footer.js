import React from 'react';
// Import des images :
import logoKasaFooter from '../assets/images/kasa-logo-footer.png';

const Footer = () => {
	return (
		<footer>
			<img src={logoKasaFooter} alt="logo du site" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
