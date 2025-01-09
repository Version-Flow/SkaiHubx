import React, { useState, useEffect } from 'react';

const DataBar = ({ title, icon }) => {
  const [role, setRole] = useState(''); // State to store the user's role

  useEffect(() => {
    // Simulate fetching role from session storage
    const userRole = sessionStorage.getItem('role') || 'Admin';
    setRole(userRole);
  }, []); // Runs only on component mount

  return (
    <>
      <div className="contentTop">
        <span className="pageTitle">
          <span className={icon} /> {title}
        </span>
        <ul className="quickStats">
          {role === 'Admin' && (
            <>
              
              <li>
                <a href="#" className="greenImg">
                  <i className="icon-alert" />
                </a>
                <div className="floatR">
                  <strong className="blue">0</strong>
                  <span>Notification</span>
                </div>
              </li>
              <li>
                <a href="#" className="greenImg">
                <i className="icon-chat" />
                </a>
                <div className="floatR">
                  <strong className="blue">0</strong>
                  <span>Messages</span>
                </div>
              </li>
              <li>
                <a href="#" className="greenImg">
                <i className="icon-cart" />
                </a>
                <div className="floatR">
                  <strong className="blue">0</strong>
                  <span>Low Stock Alert</span>
                </div>
              </li>
              <li>
                <a href="#" className="redImg">
                <i className="icon-calendar" />
                </a>
                <div className="floatR">
                  <strong className="blue">0</strong>
                  <span>Expire Alerts</span>
                </div>
              </li>
            </>
          )}

          {(role === 'SalesAgent') && (
            <li>
              <a href="#" className="greenImg">
                <img src="/temp/images/icons/quickstats/money.png" alt="Money Icon" />
              </a>
              <div className="floatR">
                <strong className="blue">1289</strong>
                <span>orders</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default DataBar;
