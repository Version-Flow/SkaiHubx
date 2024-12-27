
import React from 'react';
import SalesAgent from './sidebarinner/SalesAgent';
import Manager from './sidebarinner/Manager';
import Admin from './sidebarinner/Admin';
import Accountant from './sidebarinner/Account';
import HR from './sidebarinner/HR';
import SkaiTeam from './sidebarinner/SkaiTeam';


const SidbarInner = () => {

  // Simulate role from session
  const userRole = sessionStorage.getItem('role') || 'SalesAgent';

  const renderSidebar = () => {
    switch (userRole) {
      case 'SalesAgent':
        return <SalesAgent />;
      case 'Manager':
        return <Manager />;
      case 'Admin':
        return <Admin />;
      case 'Accountant':
        return <Accountant />;
      case 'HR':
        return <HR />;
      case 'SkaiTeam':
        return <SkaiTeam />;
      default:
        return <SalesAgent />;
    }
  };


  return (
    <>

      {renderSidebar()}

    </>
  )
}

export default SidbarInner