import React, { useEffect, useState } from 'react';
import Config from '../../helpers/config';
import { useOutletContext } from 'react-router-dom';
import { QRCode } from 'react-qrcode-logo';

const Login = () => {
    const { setPageTitle } = useOutletContext();
    const currentYear = new Date().getFullYear();
    const [showSection, setShowSection] = useState(false);
    const [qrCodeValue, setQrCodeValue] = useState(generateRandomNumber());

    // Generate random 10-character number function
    function generateRandomNumber() {
        return Math.floor(Math.random() * 1e10).toString().padStart(10, '0');
    }

    useEffect(() => {
        const titles = "Login";

        setPageTitle(titles);
        Config[0].currentPage = titles;
        document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
    }, [setPageTitle]);

    const createNew = () => {
        window.bootstrap.Modal.getOrCreateInstance(document.getElementById('scanloginModal')).show();
        // Start generating numbers dynamically every 5 seconds
        const interval = setInterval(() => {
            setQrCodeValue(generateRandomNumber());
        }, 10000);

        // Clear the interval when the modal is hidden
        const modal = document.getElementById('scanloginModal');
        modal.addEventListener('hidden.bs.modal', () => clearInterval(interval), { once: true });
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ marginTop: -35 }}>
                <div className="col-md-6">
                    <div className="mock-background">
                        <div className="a-head">
                            <h6>{Config[0].APP_ALLIASE} (Authentication)</h6>
                        </div>
                        <div className="body bg-auth">
                            {/* Conditionally render this section */}
                            {showSection && (
                                <section className="text-center mt-4" style={{ marginBottom: 8 }}>
                                    <h6 style={{ marginBottom: -2 }}>
                                        <b>Welcome back </b>
                                        <b className="text-skai-primary">Fullname here </b>
                                    </h6>
                                    <small className="text-muted">(Actual username here)</small>
                                </section>
                            )}

                            <div className="formRow">
                                {/* Conditionally render Username field */}
                                {!showSection && (
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Username</label>
                                        <input type="text" placeholder="Enter Username" />
                                    </div>
                                )}

                                <div className="col-md-12 mb-2">
                                    <label className="form-label">Password</label>
                                    <input type="password" placeholder="Enter Password" />
                                </div>

                                <div className="col-md-12">
                                    <input type="checkbox" className="check" />
                                    <label className="mt-2">Remember Me</label>
                                    <a href="#" onClick={() => { window.location.href = "/account/recover-password"; }} className="float-right">
                                        Forgotten Password
                                    </a>
                                </div>

                                <div className="col-md-12 mt-3">
                                    {/* Conditionally render Login button */}
                                    {!showSection && <a href="#" className="buttonS bLightBlue mr-2">Login</a>}
                                    {showSection && <a href="#" className="buttonS bLightBlue mr-2">Continue</a>}
                                    <a href="#" className="buttonS bDefault" onClick={createNew}> <i className='icon-camera mr-2'></i> Scan</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conditionally render this section */}
                    {showSection && (
                        <section className="col-sm-12 text-center mt-2">
                            <a className="text-muted mb-0">
                                Not
                                <b className="text-skai-primary ml-1">Fullname here</b> Sign in as a
                                <a href="#" className="text-dark ml-1">
                                    <b className="text-info">different person here</b>
                                </a>
                            </a>
                        </section>
                    )}

                    <div className="divider mt-2"> <span /> </div>
                    <div className="col-md-12">
                        <span className="text-muted form-text">
                            All right reserved © {currentYear}{" "}
                            <b className="text-uppercase text-info">{Config[0].APP_ALLIASE}</b>. {Config[0].APP_VERSION} Powered with{" "}
                            <i className="icon-heart text-danger" />
                            by <b className="text-uppercase text-info">{Config[0].BRAND_NAME} Team</b>
                        </span>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="scanloginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title text-truncate">MFA AUTHENTICATION</h6>
                            <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12">
                                <p className="text-center auth-title"> Follow these steps to scan and log in: </p>
                                <ol className="text-start" style={{ margin: '0 auto', maxWidth: '450px' }}>
                                    <li>Open the <b className='text-uppercase text-info'>{Config[0].APP_ALLIASE}</b> app on your mobile device.</li>
                                    <li>Go to the <b className='text-info'>Profile</b> section.</li>
                                    <li>Tap on <b className='text-info'>Sync Dynamically</b>.</li>
                                    <li>Select <b className='text-info'>Sync Authentication</b>.</li>
                                    <li>Now, use your phone to scan the QR code below and enjoy the great services <b className='text-uppercase text-info'>{Config[0].APP_ALLIASE}</b> provides for you!</li>
                                </ol>
                            </div>
                            <div className="col-md-12 text-center mt-3">
                                <QRCode value={qrCodeValue} qrStyle="dots" bgColor="transparent" />
                            </div>
                            <div className="divider mt-2 mb-4"> <span /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
