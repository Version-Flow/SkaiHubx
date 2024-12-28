
import React from 'react';
import Config from '../../helpers/config';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const ResetPassword = () => {

  const { setPageTitle } = useOutletContext();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const titles = "Reset Password";

    setPageTitle(titles);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle]);



  return (
    <>

      <div className="d-flex justify-content-center align-items-center">

        <div className="col-md-6">
          <div className='mock-background'>
            <div className="a-head">
              <h6>{Config[0].APP_ALLIASE} (Reset Password)</h6>
            </div>
            <div className="body bg-auth">
              <div className="formRow">

                <div className="col-md-12 mb-2">
                  <label className="form-label">Security Answer</label>
                  <input type="text" placeholder="Security Answer" />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="form-label">New Password</label>
                  <input type="password" placeholder="Enter Password" />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" placeholder="Enter Password" />
                </div>

                <div className="col-md-12 mt-3">
                  <a href="#" className="buttonS bGreen float-right">Change Password</a>
                </div>

              </div>
            </div>
          </div>

          <a href="#" onClick={() => { window.location.href = "/account/login"; }} className='float-right mt-2'>Back to login</a>
          <div className="divider"><span /></div>
          <div className="col-md-12">
            <span className='text-muted form-text'>All right reserved ©  {currentYear} <b className='text-uppercase text-info'>{Config[0].APP_ALLIASE}</b>. {Config[0].APP_VERSION} Powered with <i className="icon-heart text-danger" />by <b className='text-uppercase text-info'>{Config[0].BRAND_NAME} Team</b></span>
          </div>
        </div>


      </div>

    </>
  )

}

export default ResetPassword