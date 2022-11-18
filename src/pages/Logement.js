import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Error from './Error';
import Carousel from '../components/Carousel';
import Stars from '../components/Stars';
import Dropdown from '../components/Dropdown';
import Logements from '../api.json';

const Logement = () => {
	const idLogement = useParams().id;

	let verificationId = Logements.find((logement) => idLogement === logement.id);

	if (!verificationId) {
		return <Error />;
	}

	let logementInformation = Logements.filter((logement) => idLogement === logement.id)[0];

	document.title = `Kasa | ${logementInformation.title}`;

	return (
		<div className="app">
			<Header />
			<main>
				<section className="logement-carousel">
					<Carousel imgUrl={logementInformation.pictures} />
				</section>
				<section className="logement-description">
					<div className="logement-description__main">
						<div className="logement-description__title">
							<h1>{logementInformation.title}</h1>
							<h2>{logementInformation.location}</h2>
							<div className="logement-description__tags-container">
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
								<Stars nbStar={logementInformation.rating} />
							</div>
						</div>
					</div>
					<div className="logement-description__dropdown-container">
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
