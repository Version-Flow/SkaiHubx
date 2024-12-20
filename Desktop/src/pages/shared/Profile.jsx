
import React from 'react'
import { useEffect, useState } from 'react';
import Config from '../../helpers/config';
import { useOutletContext } from 'react-router-dom';

const Profile = () => {

  const { setPageTitle, setPageIcon, setBreadcrumbItems } = useOutletContext();

  useEffect(() => {
    const titles = "My Profile"; const icons = "icon-user";

    setPageTitle(titles); setPageIcon(icons);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle, setPageIcon, setBreadcrumbItems]);

  return (
    <>

      <div className="wrapper">
        <ul className="middleNavR">
          <li><a href="#" title="Add an article" className="tipN"><img src="/temp/images/icons/middlenav/create.png"  /></a></li>
          <li><a href="#" title="Upload files" className="tipN"><img src="/temp/images/icons/middlenav/upload.png"  /></a></li>
         
        </ul>

        {/* Chart */}
        <div className="widget">
          
        </div>
        {/* 6 + 6 */}

        
      </div>


    </>
  )
}

export default Profile