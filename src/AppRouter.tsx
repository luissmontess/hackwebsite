import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';
import HomePage from './views/public_views/HomePage';

import RegistrationLayout from './layouts/RegistrationLayout';
import Registration from './views/registration_views/Registration';

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<RegistrationLayout />}>  
          <Route path="/register" element={<Registration />}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default AppRouter;
