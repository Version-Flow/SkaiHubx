
import React from 'react';
import Config from '../../helpers/config';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const RecoverPassword = () => {

  const { setPageTitle } = useOutletContext();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const titles = "Recover Password";

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
              <h6>{Config[0].APP_ALLIASE} (Recover Password)</h6>
            </div>
            <div className="body bg-auth">
              <div className="formRow">

                <div className='alert mb-0'>
                  <span> Please provide us with your registered email address. We will send you a link to reset your password.</span>
                  <hr />
                </div>

                <div className="col-md-12 mb-2">
                  <label className="form-label">Enter Email Address</label>
                  <input type="text" placeholder="Enter Email" />
                </div>

                <div className="col-md-12 mt-3">
                  <a href="#" className="buttonS bGreen float-right">Send Request</a>
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

export default RecoverPassword