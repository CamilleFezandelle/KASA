// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React from 'react';
// (Images)
import fullStar from '../assets/images/full-star.png';
import emptyStar from '../assets/images/empty-star.png';

// --------------------
// Contenu du composant
// --------------------
const Stars = ({ nbStar }) => {
	// (Variable contenant le nombre d'étoile, ici 5)
	const rating = [1, 2, 3, 4, 5];

	// (Mappage des 5 étoiles)
	return rating.map((star, index) =>
		star <= parseInt(nbStar) ? (
			// (Si le nombre correspond est inférieur ou égal au nombre d'étoile donné dans l'API (récupéré avec un props), alors on affiche une étoile pleine)
			<img src={fullStar} alt="étoile remplie" key={index} className="logement-description__stars" />
		) : (
			// (Sinon on affiche on étoile vide)
			<img src={emptyStar} alt="étoile vide" key={index} className="logement-description__stars" />
		)
	);
};

export default Stars;
