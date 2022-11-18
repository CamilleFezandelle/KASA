// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React, { useState } from 'react';
// (Images)
import backImg from '../assets/images/carousel-back-button.png';
import nextImg from '../assets/images/carousel-next-button.png';

// --------------------
// Contenu du composant
// --------------------
const Carousel = ({ imgUrl }) => {
	// (Déclaration d'une variable d'état permettant de définir l'index au sein du Carousel)
	const [slideIndex, setSlideIndex] = useState(1);

	// (Passer à l'image précédente (si c'est la première image, on revient à la dernière de la liste))
	const backSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(imgUrl.length);
		}
	};

	// (Passer à l'image suivante' (si c'est la dernière image, on revient à la première de la liste))
	const nextSlide = () => {
		if (slideIndex !== imgUrl.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === imgUrl.length) {
			setSlideIndex(1);
		}
	};

	return (
		<div className="logement-carousel__container">
			{/* (Mappage de toutes les images que le mettra on opacité 0 par défault, sauf celle qui contiendra la classe finissant par '--active') */}
			{imgUrl.map((img, index) => (
				<div
					key={index}
					className={
						slideIndex === index + 1
							? 'logement-carousel__img-container logement-carousel__img-container--active'
							: 'logement-carousel__img-container'
					}
				>
					<img src={img} alt="logement" />
				</div>
			))}

			{/* (Si le Carousel contient plusieurs images, alors on ajoute au DOM des boutons d'interactions et un texte d'indication) */}
			{/* (Sinon on ajoute rien) */}
			{imgUrl.length > 1 ? (
				<>
					<button onClick={backSlide} className="logement-carousel__btn logement-carousel__btn--back">
						<img src={backImg} alt="back button" />
					</button>
					<button onClick={nextSlide} className="logement-carousel__btn logement-carousel__btn--next">
						<img src={nextImg} alt="next button" />
					</button>
					<div className="logement-carousel__text-indicator">
						<p>
							{slideIndex}/{imgUrl.length}
						</p>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default Carousel;
