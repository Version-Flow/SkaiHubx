
import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <>
            <div className="breadLinks">
                <ul>
                    <li title='Press here to refresh the page'><a href="#" onClick={() => window.location.reload()}>
                        <i className="icos-refresh2" /><strong>Reload Page</strong></a>
                    </li>
                    <li><a href="#" ><i className="icos-check" /><span>Tasks</span> <strong>(0)</strong></a></li>
                    <li className="has">
                        <a >
                            <i className="icos-money3" />
                            <span>Reports</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            <li><Link to="#" ><span className="icos-listimg" />Item 1</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Item 2</Link></li>
                        </ul>
                    </li>
                    <li className="has">
                        <a >
                            <i className="icos-cart2" />
                            <span>Daily Sales</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            <li><Link to="#" ><span className="icos-listimg" />Item 1</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Item 2</Link></li>
                        </ul>
                    </li>


                </ul>
            </div>

        </>
    )
}

export default Admin