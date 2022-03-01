// Dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Components
import Index from '../pages/index';
import Header from '../components/header';
import Projects from '../pages/projects';

const Router = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Index />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
