import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logements from '../api.json';

const Home = () => {
	document.title = 'Kasa | Accueil';

	return (
		<div className="app">
			<Header />
			<main>
				<section className="home-illustration">
					<h1 className="home-illustration__desk-title">Chez vous, partout et ailleurs</h1>
					<h1 className="home-illustration__mobile-title">
						Chez vous,
						<br />
						partout et ailleurs
					</h1>
				</section>
				<section className="home-gallery">
					{Logements.map((logement) => (
						<Link to={`/logement/${logement.id}`} className="home-card" key={logement.id}>
							<img src={logement.cover} alt={`${logement.title}`} className="home-card__img" />
							<h2 className="home-card__title">{logement.title}</h2>
						</Link>
					))}
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
