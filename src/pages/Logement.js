import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Error from './Error';
import Logements from '../api.json';

const Logement = () => {
	const idLogement = useParams().id;

	let verificationId = Logements.find((logement) => idLogement === logement.id);

	if (!verificationId) {
		return <Error />;
	}

	return (
		<div className="app">
			<Header />
			<h1>Logement</h1>
			<Footer />
		</div>
	);
};

export default Logement;
