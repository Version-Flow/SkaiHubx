
import React from 'react';
import SalesAgent from './sidebarinner/SalesAgent';
import Admin from './sidebarinner/Admin';


const SidbarInner = () => {

  // Simulate role from session
  const userRole = sessionStorage.getItem('role') || 'Admin';

  const renderSidebar = () => {
    switch (userRole) {
      case 'SalesAgent':
        return <SalesAgent />;
      case 'Admin':
        return <Admin />;
    }
  };


  return (
    <>

      {renderSidebar()}

    </>
  )
}

export default SidbarInner