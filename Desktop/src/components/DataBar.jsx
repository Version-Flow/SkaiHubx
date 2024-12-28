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
                <a href="#" className="blueImg">
                  <img src="/temp/images/icons/quickstats/plus.png" alt="Plus Icon" />
                </a>
                <div className="floatR">
                  <strong className="blue">5489</strong>
                  <span>visits</span>
                </div>
              </li>
              <li>
                <a href="#" className="redImg">
                  <img src="/temp/images/icons/quickstats/user.png" alt="User Icon" />
                </a>
                <div className="floatR">
                  <strong className="blue">4658</strong>
                  <span>users</span>
                </div>
              </li>
            </>
          )}
          {(role === 'Admin' || role === 'SalesAgent') && (
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
