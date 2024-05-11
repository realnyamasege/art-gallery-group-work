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
];
