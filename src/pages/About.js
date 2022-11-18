// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React from 'react';
// (Composants)
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

// --------------------
// Contenu du composant
// --------------------
const About = () => {
	// (Contenu des dropdown de la page)
	const dropdownText = [
		{
			title: 'Fiabilité',
			description:
				'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
		},
		{
			title: 'Respect',
			description:
				'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
		},
		{
			title: 'Service',
			description:
				"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
		},
		{
			title: 'Sécurité',
			description:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];

	// (Titre de la page)
	document.title = 'Kasa | A propos';

	return (
		<div className="app">
			<Header />
			<main>
				<section className="about-illustration"></section>
				<section className="about-dropdown">
					{/* (Mappage des dropdown) */}
					{dropdownText.map((dropdown, index) => (
						<div className="about-dropdown__container" key={index}>
							{/* (Appel des composants 'Dropdown') */}
							<Dropdown title={dropdown.title} description={dropdown.description} page="about" />
						</div>
					))}
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default About;
