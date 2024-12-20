
import React from 'react'
import { useEffect, useState } from 'react';
import Config from '../../helpers/config';
import { useOutletContext } from 'react-router-dom';

const Settings = () => {

  const { setPageTitle, setPageIcon, setBreadcrumbItems } = useOutletContext();

  useEffect(() => {
    const titles = "Sales Settings"; const icons = "icon-screen";

    // Set breadcrumb items dynamically
    setBreadcrumbItems([
      { label: 'Dashboard', link: 'sales/dashboard' },
    ]);

    setPageTitle(titles); setPageIcon(icons);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle, setPageIcon, setBreadcrumbItems]);

  return (
    <>

      <div className="wrapper">
        <ul className="middleNavR">
          <li><a href="#" title="Add an article" className="tipN"><img src="/temp/images/icons/middlenav/create.png" alt /></a></li>
          <li><a href="#" title="Upload files" className="tipN"><img src="/temp/images/icons/middlenav/upload.png" alt /></a></li>
          <li><a href="#" title="Add something" className="tipN"><img src="/temp/images/icons/middlenav/add.png" alt /></a></li>
          <li><a href="#" title="Messages" className="tipN"><img src="/temp/images/icons/middlenav/dialogs.png" alt /></a><strong>8</strong></li>
          <li><a href="#" title="Check statistics" className="tipN"><img src="/temp/images/icons/middlenav/stats.png" alt /></a></li>
        </ul>

        {/* Chart */}
        <div className="widget">
          
        </div>
        {/* 6 + 6 */}

        
      </div>


    </>
  )
}

export default Settings