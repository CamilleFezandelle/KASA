import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Logement from './pages/Logement';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/a-propos" element={<About />} />
				<Route path="/logement/:id" element={<Logement />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
