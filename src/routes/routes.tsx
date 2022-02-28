// Dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Index from '../pages/index';
import Header from '../components/header';
import { Navigate } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Index />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
