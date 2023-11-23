import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/homePage';
import Header from './components/navigation/header';
import PurchasePage from './pages/purchase/purchasePage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="anuncio/:id" element={<PurchasePage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
