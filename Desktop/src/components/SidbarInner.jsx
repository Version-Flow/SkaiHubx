
import React from 'react'

const SidbarInner = () => {
  return (
    <>

<div className="secNav">
  <div className="secWrapper">

    {/* Client data */}
    <div className="secTop">
      <div className="balance">   
        <div className="balInfo">
          <strong>Company Name here</strong>
          <span>Address here</span>
          </div>
      </div>
      <a href="#" className="triangle-red" />
    </div>


    {/* Tabs container */}
    <div id="tab-container" className="tab-container">
      <ul className="iconsLine ic3 etabs">
        <li><a href="#general" title><span className="icos-fullscreen" /></a></li>
        <li><a href="#alt1" title><span className="icos-user" /></a></li>
        <li><a href="#alt2" title><span className="icos-archive" /></a></li>
      </ul>

      <div className="divider"><span /></div>

      <div id="general">
        <div className="sidePad">
          <a href="#" title className="sideB bLightBlue">Add new session</a>
        </div>
        <div className="divider"><span /></div>
        <div className="sideUpload">
          <div className="dropFiles" /> 
        </div>
      </div>

      <div id="alt1">
        <div className="numStats">
          <ul>
            <li><a href="#" title>4248</a><span>visitors</span></li>
            <li><a href="#" title>748</a><span>orders</span></li>
            <li className="last"><a href="#" title>357</a><span>reviews</span></li>
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

export default SidbarInner