import React, { useState } from 'react';
// Import des images :
import dropdownClose from '../assets/images/arrow_close.png';
import dropdownOpen from '../assets/images/arrow_open.png';

const Dropdown = ({ title, description, page, ifArray }) => {
	const [openClose, setOpenClose] = useState(false);

	return openClose ? (
		<div className={`dropdown-open ${page}-dropdown-open`}>
			<button type="button" onClick={() => setOpenClose(false)}>
				<h2 className={`dropdown-open__title ${page}-dropdown-open__title`}>{title}</h2>
				<img src={dropdownOpen} alt="bouton pour fermer la section" />
			</button>
			{ifArray ? (
				<div className={`dropdown-open__body ${page}-dropdown-open__body`}>
					{ifArray.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			) : (
				<div className={`dropdown-open__body ${page}-dropdown-open__body`}>
					<p>{description}</p>
				</div>
			)}
		</div>
	) : (
		<div className={`dropdown-close ${page}-dropdown-close`}>
			<button type="button" onClick={() => setOpenClose(true)}>
				<h2 className={`dropdown-close__title ${page}-dropdown-close__title`}>{title}</h2>
				<img src={dropdownClose} alt="bouton pour ouvrir la section" />
			</button>
		</div>
	);
};

export default Dropdown;
