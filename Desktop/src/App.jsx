
import { useEffect } from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import AccountLayout from './layouts/AccountLayout';

// General Pages
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/shared/Profile';
import LoginPage from "./pages/shared/Login";
import ChangePassword from "./pages/shared/ChangePassword";
import IndexPage from "./pages/shared/Index";
import ResetPassword from "./pages/shared/ResetPassword";
import SupportToken from "./pages/shared/SupportToken";
import LockScreen from './pages/shared/LockScreen';
import OTPPage from './pages/shared/OTP';
import RecoverPassword from './pages/shared/RecoverPassword';


// Sales person routes
import SalesDashboard from './pages/sales/Dashboard';
import SalesSettings from './pages/sales/Settings';
import SalesForum from './pages/sales/Forum';
import SalesPage from './pages/sales/SalesPage';
import StatisitcsDashboard from "./pages/sales/StatisitcsDashboard";

// Admin routes
import AdminDashboard from './pages/admin/Dashboard';
import AdminSettings from './pages/admin/Settings';
import AdminForum from './pages/admin/Forum';




const App = () => {

  const location = useLocation();

  return (

    <Routes>

      {/* Root Layout frame */}
      <Route element={<RootLayout />}>

        {/* Fallback Route */}
        <Route path="*" element={<ErrorPage />} />

        {/* Sales person routes*/}
        <Route path="/sales-agent">
          <Route path="dashboard" element={<SalesDashboard />} />
          <Route path="settings" element={<SalesSettings />} />
          <Route path="forum" element={<SalesForum />} />
          <Route path="statistics" element={<StatisitcsDashboard />} />
          <Route path="home" element={<SalesPage />} />
        </Route>

        {/* Account routes */}
        <Route path="/account">
          <Route path="profile" element={<Profile />} />
          <Route path="support-token" element={<SupportToken />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="forum" element={<AdminForum />} />
        </Route>


      </Route>
      {/* End of root layout frame */}



      {/* Empty or auth layout */}
      <Route element={<AccountLayout />}>

        <Route path="/" element={<IndexPage />} />

        <Route path="/account">
          <Route path="login" element={<LoginPage />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="lock-screen" element={<LockScreen />} />
          <Route path="otp" element={<OTPPage />} />
          <Route path="recover-password" element={<RecoverPassword />} />
        </Route>

      </Route>
      {/* End of empty or auth layout */}
       
      
    </Routes>

  );
};

export default App;
