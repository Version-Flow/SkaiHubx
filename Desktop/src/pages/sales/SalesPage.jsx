
import React from 'react';
import { useEffect, useState } from 'react';
import Config from '../../helpers/config';
import { useOutletContext } from 'react-router-dom';

const SalesPage = () => {

  const { setPageTitle, setPageIcon, setBreadcrumbItems } = useOutletContext();

  useEffect(() => {
    const titles = "Sales"; const icons = "icon-chat-2";

    // Set breadcrumb items dynamically
    setBreadcrumbItems([
      { label: 'Dashboard', link: '/sales-agent/dashboard' },
    ]);

    setPageTitle(titles); setPageIcon(icons);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle, setPageIcon, setBreadcrumbItems]);

  return (
    <div>SalesPage</div>
  )
}

export default SalesPage