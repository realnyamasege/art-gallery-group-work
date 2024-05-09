import React from 'react'
import App from "./App";
import ArtPage from './components/ArtPage';
import AddArtForm from './components/AddArtForm';

export const routes = [{ path: "/", element: <App /> }, {path:"/gallery", element: <ArtPage />}, {path: "/add", element:<AddArtForm />}];
