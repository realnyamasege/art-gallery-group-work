// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import ArtDetailsPage from './pages/ArtDetailsPage'; // Import ArtDetailsPage component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component=
{Home} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/art/:id" component={ArtDetailsPage} /> {/* Route for ArtDetailsPage */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
