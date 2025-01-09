
import React from 'react';
import Config from '../../helpers/config';

const Index = () => {


  return (
    <>

      <div className="d-flex justify-content-center align-items-center">

        <div className="col-md-6">
          <div className='mock-background'>
            <div className="body bg-auth">
              <ul className="middleNavR mb-4">
                <li>
                  <a href="#" title="Log in to the system" className="tipN circle-button-a" onClick={() => { window.location.href = "/account/login"; }}>
                    <span className='fa fa-lock circle-button-i index-icon'></span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Go watch tutorials" className="tipN circle-button-a">
                    <span className='fa fa-eye circle-button-i index-icon'></span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Customize my interface" className="tipN circle-button-a">
                    <span className='fa fa-desktop circle-button-i index-icon'></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider mt-2"><span /></div>
        </div>


      </div>

    </>
  )
}

export default Index