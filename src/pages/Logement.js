// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React from 'react';
import { useParams } from 'react-router-dom';
// (API)
import Logements from '../api.json';
// (Composants)
import Error from './Error';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Stars from '../components/Stars';
import Dropdown from '../components/Dropdown';

// --------------------
// Contenu du composant
// --------------------
const Logement = () => {
	// (Récupération de l'id dans l'URL)
	const idLogement = useParams().id;

	// (On recherche si l'id de l'URL correspond à un id présent dans l'API)
	let verificationId = Logements.find((logement) => idLogement === logement.id);

	// (On renvoie l'utilisateur sur la page d'erreur si l'on a pas trouvé d'id correspondant)
	if (!verificationId) {
		return <Error />;
	}

	// (On stocke alors les informations du logement correspondant à l'id trouvé)
	let logementInformation = Logements.filter((logement) => idLogement === logement.id)[0];

	// (Titre de la page)
	document.title = `Kasa | ${logementInformation.title}`;

	return (
		<div className="app">
			<Header />
			<main>
				<section className="logement-carousel">
					{/* (Appel du Carousel) */}
					<Carousel imgUrl={logementInformation.pictures} />
				</section>
				<section className="logement-description">
					<div className="logement-description__main">
						<div className="logement-description__title">
							<h1>{logementInformation.title}</h1>
							<h2>{logementInformation.location}</h2>
							<div className="logement-description__tags-container">
								{/* (Mappage des tags) */}
								{logementInformation.tags.map((tag, index) => (
									<div className="logement-description__tag" key={index}>
										<p>{tag}</p>
									</div>
								))}
							</div>
						</div>
						<div className="logement-description__host">
							<div className="logement-description__host-info">
								<p>{logementInformation.host.name}</p>
								<div className="logement-description__host-img-container">
									<img src={logementInformation.host.picture} alt={logementInformation.host.name} />
								</div>
							</div>
							<div className="logement-description__rating">
								{/* (Appel du composant 'Stars' pour afficher les étoiles correspondantes) */}
								<Stars nbStar={logementInformation.rating} />
							</div>
						</div>
					</div>
					<div className="logement-description__dropdown-container">
						{/* (Appel des composants 'Dropdown') */}
						<Dropdown title="Description" description={logementInformation.description} page="logement" />
						<Dropdown title="Équipements" page="logement" ifArray={logementInformation.equipments} />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Logement;
