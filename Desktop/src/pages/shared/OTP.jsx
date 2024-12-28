import React, { useEffect, useRef, useState } from 'react';
import Config from '../../helpers/config';
import { useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';

const OTP = () => {

  const { setPageTitle } = useOutletContext();
  const inputRefs = useRef([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const titles = "One Time Password";

    setPageTitle(titles);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle]);

  // Handle the input change
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      e.target.value = '';
    }
  };

  // Check the keydown
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };


  // Handle the button click
  const handleVerifyClick = () => {
    const otp = inputRefs.current.map((input) => input.value).join('');
    if (otp.length === 6) {
      // Use SweetAlert to display the OTP
      Swal.fire({ title: 'OTP Entered', text: `Your entered OTP is: ${otp}`, icon: 'success', });
    } else {
      Swal.fire({
        title: 'Incomplete OTP',
        text: 'Please fill all the OTP boxes before verifying.',
        icon: 'warning',
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className='mock-background'>
          <div className="a-head">
            <h6>{Config[0].APP_ALLIASE} (OTP)</h6>
          </div>
          <div className="body bg-auth">

            <div className="formRow">
              <div className='alert mb-0'>
                <span>Please a token has been sent to your email and your active phone number, please provide the token to continue the process...</span>
              </div>
              <div className="col-md-12 mb-2 d-flex gap-2">
                {[...Array(6)].map((_, index) => (
                  <input key={index} type="text" maxLength={1} ref={(el) => inputRefs.current[index] = el}
                    onChange={(e) => handleInputChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <div className="col-md-12 mt-3">
                <button className="buttonS bGreen float-right" onClick={handleVerifyClick}>
                  Verify Pin
                </button>
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
  );
};

export default OTP;
