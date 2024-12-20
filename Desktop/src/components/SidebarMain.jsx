import React from 'react';


const SidebarMain = () => {

  return (
    <>
      <div className="mainNav">
        <div className="user">
          <a title className="leftUserDrop">
            <img src="/temp/images/user.png" alt />
            <span><strong>3</strong></span>
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
        <ul className="nav">
          <li>
            <a href="index.html" title className="active">
              <img src="/temp/images/icons/mainnav/dashboard.png" alt />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="ui.html" >
              <img src="/temp/images/icons/mainnav/ui.png" alt />
              <span>UI elements</span>
            </a>
          </li>
          <li>
            <a href="forms.html" >
              <img src="/temp/images/icons/mainnav/forms.png" alt />
              <span>Forms stuff</span>
            </a>
          </li>
          <li>
            <a href="messages.html" >
              <img src="/temp/images/icons/mainnav/messages.png" alt />
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="statistics.html" >
              <img src="/temp/images/icons/mainnav/statistics.png" alt />
              <span>Statistics</span>
            </a>
          </li>
          <li>
            <a href="tables.html" >
              <img src="/temp/images/icons/mainnav/tables.png" alt />
              <span>Tables</span>
            </a>
          </li>
          <li>
            <a href="other_calendar.html" >
              <img src="/temp/images/icons/mainnav/other.png" alt />
              <span>Other pages</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarMain;
