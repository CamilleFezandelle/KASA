import React, { useState } from 'react';
import backImg from '../assets/images/carousel-back-button.png';
import nextImg from '../assets/images/carousel-next-button.png';

const Carousel = ({ imgUrl }) => {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== imgUrl.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === imgUrl.length) {
			setSlideIndex(1);
		}
	};

	const backSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(imgUrl.length);
		}
	};

	return (
		<div className="logement-carousel__container">
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
