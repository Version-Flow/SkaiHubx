
import React from 'react';
import Config from '../../../helpers/config';

const Forum = () => {

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
                        <li><a href="#alt1" ><span className="icos-users" /></a></li>
                        <li><a href="#alt2" ><span className="icos-list" /></a></li>
                    </ul>

                    <div className="divider"><span /></div>
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

export default Forum