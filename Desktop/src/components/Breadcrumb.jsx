
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import SalesAgent from './breadcrumbs/SalesAgent';
import Admin from './breadcrumbs/Admin';

const Breadcrumb = ({ items }) => {

  const location = useLocation()
  const pathName = location.pathname;

  // Get the last part of the path
  const lastPart = pathName.substring(pathName.lastIndexOf('/') + 1) || 'Dashboard';

  // Simulate role from session
  const userRole = sessionStorage.getItem('role') || 'SalesAgent';

  const renderControls = () => {
    switch (userRole) {
      case 'SalesAgent':
        return <SalesAgent />;
      case 'Admin':
        return <Admin />;
      default:
        return <SalesAgent />;
    }
  };

  return (
    <>

      <div className="breadLine">
        <div className="bc">
          <ul id="breadcrumbs" className="breadcrumbs">

            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))
            }
            <li className="current"><a href={pathName} >{lastPart.charAt(0).toUpperCase() + lastPart.slice(1)}</a></li>
          </ul>
        </div>

        {renderControls()}

      </div>


    </>
  )
}

export default Breadcrumb