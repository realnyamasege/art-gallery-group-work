<<<<<<< HEAD
import React from "react";
import App from "./App";
import AboutUs from './components/AboutUs';
import ArtPage from "./components/ArtPage";
import AddArtForm from "./components/AddArtForm";

export const routes = [
  { path: "/", element: <App /> },
  { path: '/about', element: <AboutUs /> },
  { path: "/gallery", element: <ArtPage /> },
  { path: "/add", element: <AddArtForm /> },
=======
import React from 'react';
import App from './App';
import AboutUs from './components/AboutUs';
import ArtPage from './components/ArtPage';
import AddArtForm from './components/AddArtForm';


export const routes = [
  { path: '/', element: <App /> },
  { path: '/about', element: <AboutUs /> },
  { path: '/gallery', element: <ArtPage /> },
  { path: '/add', element: <AddArtForm /> }
>>>>>>> 120ef3b23ec6ab2ec64c28cc1d3e8c16111ecb6c
];
