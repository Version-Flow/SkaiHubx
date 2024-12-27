
import React from 'react'

const Manager = () => {
  return (
    <>
      <div className="secNav">
        <div className="secWrapper">

          {/* Client data */}
          <div className="secTop">
            <div className="balance">
              <div className="balInfo">
                <strong>{Config[0].CLIENT_ALLIASE}</strong>
                <span>{Config[0].CLIENT_ADDRESS}</span>
              </div>
            </div>
            <a href="#" className="triangle-red" />
          </div>


          {/* Tabs container */}
          <div id="tab-container" className="tab-container">
            <ul className="iconsLine ic3 etabs">
              <li><a href="#general" ><span className="icos-fullscreen" /></a></li>
              <li><a href="#alt1" ><span className="icos-user" /></a></li>
              <li><a href="#alt2" ><span className="icos-archive" /></a></li>
            </ul>

            <div className="divider"><span /></div>

            <div id="general">
              <div className="sidePad">
                <a href="#" className="sideB bLightBlue">Add new session</a>
              </div>
              <div className="divider"><span /></div>
              <div className="sideUpload">
                <div className="dropFiles" />
              </div>
            </div>

            <div id="alt1">
              <div className="numStats">
                <ul>
                  <li><a href="#" >4248</a><span>visitors</span></li>
                  <li><a href="#" >748</a><span>orders</span></li>
                  <li className="last"><a href="#" >357</a><span>reviews</span></li>
                </ul>
              </div>
            </div>

            <div id="alt2">
              <div className="sideWidget">
                <div className="formRow">
                  <label>Control will be here later</label>
                </div>
              </div>
            </div>

          </div>

          <div className="divider"><span /></div>
        </div>
      </div>

    </>
  )
}

export default Manager