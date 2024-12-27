import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import DataBar from '../components/DataBar';
import TitleBar from '../components/TitleBar';
import SidebarMain from '../components/SidebarMain';
import SidebarInner from '../components/SidbarInner';


const RootLayout = () => {

  const [pageTitle, setPageTitle] = useState('Dashboard');
  const [pageIcon, setPageIcon] = useState('');
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
 


  return (
    <>

      <div className="containers">

        {/* Tttlebar here */}
        <TitleBar />

        <div id="sidebar">

          {/* Sidebar Main here */}
          <SidebarMain />

          {/* Sidebar Inner here */}
          <SidebarInner />

        </div>

        <div id="content">

          {/* Databar here */}
          <DataBar title={pageTitle} icon={pageIcon} />

          {/* Breadcrumbs here */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Main content to outlet */}
          <Outlet context={{ setPageTitle, setBreadcrumbItems, setPageIcon }} />

        </div>


      </div>


    </>
  );
};

export default RootLayout;
