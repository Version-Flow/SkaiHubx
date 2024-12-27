
import React from 'react';
import Config from '../../../helpers/config';

const Statistics = () => {

    // Calling New Modal for Creating New
    const createNew = () => {
        window.bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal')).show();
    };


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
                        <ul className="iconsLine ic1 etabs">
                            <li><a href="#alt2" ><span className="icos-archive" /></a></li>
                        </ul>

                        <div className="divider"><span /></div>

                        <div id="alt2">
                            <div className="sideWidget">
                                <div className="formRow">
                                    <ul className="middleNavR row d-flex">
                                        <li className='mt-0'>
                                            <a onClick={createNew} href="#" title="Call Modal" className="tipN circle-button-a">
                                                <span className='icon-screen circle-button-i'></span>
                                            </a>
                                        </li>
                                        <li className='mt-0'>
                                            <a href="#" title="Upload files" className="tipN circle-button-a">
                                                <span className='icon-screen circle-button-i'></span>
                                            </a>
                                        </li>
                                        <li className='mt-3'>
                                            <a href="#" title="Upload files" className="tipN circle-button-a">
                                                <span className='icon-screen circle-button-i'></span>
                                            </a>
                                        </li>
                                        <li className='mt-3'>
                                            <a href="#" title="Upload files" className="tipN circle-button-a">
                                                <span className='icon-screen circle-button-i'></span>
                                            </a>
                                        </li>
                                    </ul>
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



export default Statistics