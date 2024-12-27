
import React from 'react';
import { Link } from "react-router-dom";

const SalesAgent = () => {
    return (

        <>

            <ul className="nav">
                <li>
                    <a href="/sales-agent/dashboard"  className="active">
                        <img src="/temp/images/icons/mainnav/dashboard.png" />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/sales-agent/forum" >
                        <img src="/temp/images/icons/mainnav/ui.png" />
                        <span>Forum</span>
                    </a>
                </li>
                <li>
                    <a href="/sales-agent/statistics" >
                        <img src="/temp/images/icons/mainnav/statistics.png" />
                        <span>Statistics</span>
                    </a>
                </li>
                <li>
                    <a href="/sales-agent/home" >
                        <img src="/temp/images/icons/mainnav/tables.png" />
                        <span>Sales</span>
                    </a>
                </li>
                <li>
                    <a  href="/sales-agent/settings" >
                        <img src="/temp/images/icons/mainnav/other.png" />
                        <span>More Controls</span>
                    </a>
                </li>
            </ul>


        </>
    )
}

export default SalesAgent