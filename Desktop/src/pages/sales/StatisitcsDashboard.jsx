
import React from 'react';
import { useEffect, useState } from 'react';
import Config from '../../helpers/config';
import { useOutletContext } from 'react-router-dom';


const StatisitcsDashboard = () => {

  const { setPageTitle, setPageIcon, setBreadcrumbItems } = useOutletContext();

  useEffect(() => {
    const titles = "Statistics"; const icons = "icon-chat-2";

    // Set breadcrumb items dynamically
    setBreadcrumbItems([
      { label: 'Dashboard', link: '/sales-agent/dashboard' },
    ]);

    setPageTitle(titles); setPageIcon(icons);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle, setPageIcon, setBreadcrumbItems]);

  return (
    <div>StatisitcsDashboard

      <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title text-truncate" id="modal-title">Modal Title here</h6>
              <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body">

              <div className="formRow">
                <div className="col-md-12">
                  <label htmlFor="country" className="form-label">Specify country here</label>
                  <input type="text" placeholder="Country" />
                </div>
                <div className="col-md-12 vs-top">
                  <label htmlFor="country_code" className="form-label">What is the country code?</label>
                  <input type="text" placeholder="Country Code" />
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <a href="#" className="buttonS bGreen ">Send Request</a>             
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default StatisitcsDashboard