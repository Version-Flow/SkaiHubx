
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {

  const location = useLocation()
  const pathName = location.pathname;

  // Get the last part of the path
  const lastPart = pathName.substring(pathName.lastIndexOf('/') + 1) || 'Dashboard';


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
            <li className="current"><a href={pathName} title>{lastPart.charAt(0).toUpperCase() + lastPart.slice(1)}</a></li>
          </ul>
        </div>
        <div className="breadLinks">
          <ul>
            <li><a href="#" title><i className="icos-list" /><span>Orders</span> <strong>(+58)</strong></a></li>
            <li><a href="#" title><i className="icos-check" /><span>Tasks</span> <strong>(+12)</strong></a></li>
            <li className="has">
              <a title>
                <i className="icos-money3" />
                <span>Invoices</span>
                <span><img src="/temp/images/elements/control/hasddArrow.png" alt /></span>
              </a>
              <ul>
                <li><a href="#" title><span className="icos-add" />New invoice</a></li>
                <li><a href="#" title><span className="icos-archive" />History</a></li>
                <li><a href="#" title><span className="icos-printer" />Print invoices</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>


    </>
  )
}

export default Breadcrumb