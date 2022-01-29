import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from '../../pages/FrontPage';
import MainPage from '../../pages/MainPage';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="dashboard" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
