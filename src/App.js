// ------------------------------
// Import des modules nécessaires
// ------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// (Composants)
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Logement from './pages/Logement';

// ------------------------
// Contenu de l'application
// ------------------------
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Route de la page d'accueil */}
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				{/* Route de la page 'à propos' */}
				<Route path="/a-propos" element={<About />} />
				{/* Route de la page 'logement' */}
				<Route path="/logement/:id" element={<Logement />} />
				{/* Route pour tout les autres liens vers 'Erreur 404' */}
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
