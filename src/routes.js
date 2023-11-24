import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderAppBar from './components/navigation/header';
import PurchasePage from './pages/purchase/purchasePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Open Sans',
      fontWeight: '400',
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      light: '#3B5369',
      main: '#3B5369',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function AppRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderAppBar />}>
            <Route path="anuncio/:id" element={<PurchasePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
