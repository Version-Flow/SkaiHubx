
import { useEffect } from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import RootLayout from './layouts/RootLayout';

// import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

// Sales person routes
import SalesDashboard from './pages/sales/Dashboard';
import SalesSettings from './pages/sales/Settings';



const App = () => {

  const location = useLocation();

  return (

    <Routes>

      <Route element={<RootLayout />}>

        {/* Fallback Route */}
        <Route path="*" element={<ErrorPage />} />

        {/* Sales person dashboard */}
        <Route path="/sales">
          <Route path="dashboard" element={<SalesDashboard />} />
          <Route path="settings" element={<SalesSettings />} />
        </Route>


      </Route>
      
    </Routes>

  );
};

export default App;
