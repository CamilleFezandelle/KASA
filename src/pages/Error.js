// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// (Composants)
import Header from '../components/Header';
import Footer from '../components/Footer';

// --------------------
// Contenu du composant
// --------------------
const Error = () => {
	// (Titre de la page)
	document.title = 'Kasa | Erreur';

	return (
		<div className="app">
			<Header />
			<main>
				<section className="errorpage-error">
					<h1 className="errorpage-error__title">404</h1>
					<h2 className="errorpage-error__desk-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
					<h2 className="errorpage-error__mobile-subtitle">
						Oups! La page que
						<br />
						vous demandez n'existe pas.
					</h2>
					<Link to="/home">
						<p className="errorpage-error__returnhome">Retourner sur la page d'accueil</p>
					</Link>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Error;
