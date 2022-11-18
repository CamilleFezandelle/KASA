// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React, { useState } from 'react';
// (Images)
import dropdownClose from '../assets/images/arrow_close.png';
import dropdownOpen from '../assets/images/arrow_open.png';

// --------------------
// Contenu du composant
// --------------------
const Dropdown = ({ title, description, page, ifArray }) => {
	// (Déclaration d'une variable d'état permettant de définir si le dropdown est ouvert (true) ou fermé (false))
	const [openClose, setOpenClose] = useState(false);

	return openClose ? (
		// (Si la variable est sur 'true', alors on affiche le dropdown étant ouvert)
		<div className={`dropdown-open ${page}-dropdown-open`}>
			{/* (Modification de la variable au click) */}
			<button type="button" onClick={() => setOpenClose(false)}>
				<h2 className={`dropdown-open__title ${page}-dropdown-open__title`}>{title}</h2>
				<img src={dropdownOpen} alt="bouton pour fermer la section" />
			</button>

			{ifArray ? (
				// (Détection si le texte du body du dropdown contient plusieurs textes. Si c'est le cas, alors on les maps)
				<div className={`dropdown-open__body ${page}-dropdown-open__body`}>
					{/* (Mappage des différents textes) */}
					{ifArray.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			) : (
				// (Si ce n'est pas le cas, on affiche juste le texte correspondant)
				<div className={`dropdown-open__body ${page}-dropdown-open__body`}>
					<p>{description}</p>
				</div>
			)}
		</div>
	) : (
		// (Si la variable est sur 'false', alors on affiche le dropdown étant fermé)
		<div className={`dropdown-close ${page}-dropdown-close`}>
			{/* (Modification de la variable au click) */}
			<button type="button" onClick={() => setOpenClose(true)}>
				<h2 className={`dropdown-close__title ${page}-dropdown-close__title`}>{title}</h2>
				<img src={dropdownClose} alt="bouton pour ouvrir la section" />
			</button>
		</div>
	);
};

export default Dropdown;
