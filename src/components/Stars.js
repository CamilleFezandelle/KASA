import React from 'react';
import fullStar from '../assets/images/full-star.png';
import emptyStar from '../assets/images/empty-star.png';

const Stars = ({ nbStar }) => {
	const rating = [1, 2, 3, 4, 5];

	return rating.map((star, index) =>
		star <= parseInt(nbStar) ? (
			<img src={fullStar} alt="étoile remplie" key={index} className="logement-description__stars" />
		) : (
			<img src={emptyStar} alt="étoile vide" key={index} className="logement-description__stars" />
		)
	);
};

export default Stars;
