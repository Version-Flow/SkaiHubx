
import React from 'react';
import Config from '../../../helpers/config';

const SalesHome = () => {
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

                <div id="tab-container" className="tab-container">
                    <ul className="iconsLine ic2 etabs">
                        <li><a href="#general" ><span className="icos-fullscreen" /></a></li>
                        <li><a href="#alt2" ><span className="icos-archive" /></a></li>
                    </ul>

                    <div className="divider"><span /></div>

                    <div id="general">
                        <div className="sidePad">
                            <a href="#" className="sideB bLightBlue">Add new session</a>
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

export default SalesHome