// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import ArtDetailsPage from './pages/ArtDetails'; // Import ArtDetailsPage component

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/gallery">
						<GalleryPage />
					</Route>
					<Route path="/gallery/:id">
						<ArtDetailsPage />
					</Route>
					{/* Route for ArtDetailsPage */}
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
