import React from 'react';
import SalesAgent from './sidebarmain/SalesAgent';
import Manager from './sidebarmain/Manager';
import Admin from './sidebarmain/Admin';
import Accountant from './sidebarmain/Accountant';
import HR from './sidebarmain/HR';
import SkaiTeam from './sidebarmain/SkaiTeam';


const SidebarMain = () => {

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
      <div className="mainNav">
        <div className="user">
          <a href='/account/profile' title="View Profile" className="leftUserDrop">
            <img src="/temp/images/user.png" width={80}/>
            <span title="Role here"><strong>R</strong></span>
          </a>
          <span>Eugene</span>
        </div>
        {/* Responsive nav */}
        <div className="altNav">
          <div className="userSearch">
            <form action="#">
              <input type="text" placeholder="search..." name="userSearch" />
              <input type="submit" defaultValue />
            </form>
          </div>
          {/* User nav */}
          <ul className="userNav">
            <li><a href="#" className="profile" /></li>
            <li><a href="#" className="messages" /></li>
            <li><a href="#" className="settings" /></li>
            <li><a href="#" className="logout" /></li>
          </ul>
        </div>

        {/* Main nav */}

        {renderSidebar()}

      </div>
    </>
  );
};

export default SidebarMain;
