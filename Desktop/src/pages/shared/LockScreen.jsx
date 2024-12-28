
import React from 'react';
import Config from '../../helpers/config';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';

const LockScreen = () => {

  const { setPageTitle } = useOutletContext();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const titles = "Lock Screen";

    setPageTitle(titles);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle]);

   // Handle the button click
   const handleVerifyClick = () => {
    const pas = document.getElementById('password').value;
    if (pas) {
      // Use SweetAlert to display the OTP
      Swal.fire({ title: 'Success', text: `Your entered OTP is: ${pas}`, icon: 'success', });
    } else {
      Swal.fire({ title: 'Sorry', text: 'Please password is required to continue..', icon: 'error'});
    }
  };

  return (
    <>

      <div className="d-flex justify-content-center align-items-center">

        <div className="col-md-6">
          <div className='mock-background'>
            <div className="body bg-auth">
              <div className="formRow">
                <div className="auth-logo mb-4 text-center">
                  <img src="/temp/images/logo.jpg" className="d-block mx-auto" />
                  <strong className="mt-2 d-block">Username here</strong>
                </div>
                <div className="col-md-12 mb-2 d-flex gap-2">
                  <input type="password" id='password' placeholder="Enter Password" />
                  <a href="#" className="buttonS bLightBlue float-right" onClick={handleVerifyClick}>Resume</a>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"><span /></div>
          <div className="col-md-12">
            <span className='text-muted form-text'>All right reserved ©  {currentYear} <b className='text-uppercase text-info'>{Config[0].APP_ALLIASE}</b>. {Config[0].APP_VERSION} Powered with <i className="icon-heart text-danger" />by <b className='text-uppercase text-info'>{Config[0].BRAND_NAME} Team</b></span>
          </div>
        </div>


      </div>

    </>
  )

}

export default LockScreen