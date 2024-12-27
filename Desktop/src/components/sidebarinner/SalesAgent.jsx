import React from 'react';
import { useLocation } from 'react-router-dom';
import DashboardTab from './SalesTabs/Dashboard';
import ForumTab from './SalesTabs/Forum';
import EmptyTab from './SalesTabs/Empty';
import StatisticsTab from './SalesTabs/Statistics';
import SalesHome from './SalesTabs/SalesHome';

const SalesAgent = () => {
  const location = useLocation();

  // Map routes to components
  const routeGroups = [
    { paths: ['/sales-agent/dashboard',], component: <DashboardTab /> },
    { paths: ['/sales-agent/forum',], component: <ForumTab /> },
    { paths: ['/sales-agent/settings', '/account/profile'], component: <EmptyTab /> },
    { paths: ['/sales-agent/home'], component: <SalesHome /> },
    { paths: ['/sales-agent/statistics', ], component: <StatisticsTab /> },
  ];

  // Find the matching component for the current route
  const CurrentTab =
    routeGroups.find(group => group.paths.includes(location.pathname))?.component ||
    <p>Tab not found.</p>;

  return <>{CurrentTab}</>;
};


export default SalesAgent;
