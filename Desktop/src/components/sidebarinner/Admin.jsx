import React from 'react';
import { useLocation } from 'react-router-dom';
import DashboardTab from './AdminTabs/Dashboard';
import ForumTab from './AdminTabs/Forum';
import EmptyTab from './AdminTabs/Empty';


const Admin = () => {
  const location = useLocation();

  // Map routes to components
  const routeGroups = [
    { paths: ['/admin/dashboard',], component: <DashboardTab /> },
    { paths: ['/admin/forum',], component: <ForumTab /> },
    { paths: ['/admin/settings', '/account/profile'], component: <EmptyTab /> },
  ];

  // Find the matching component for the current route
  const CurrentTab =
    routeGroups.find(group => group.paths.includes(location.pathname))?.component ||
    <p>Tab not found.</p>;

  return <>{CurrentTab}</>;
};


export default Admin;
