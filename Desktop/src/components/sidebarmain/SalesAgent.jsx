
import React from 'react';
import { Link } from "react-router-dom";

const SalesAgent = () => {
    return (

        <>

            <ul className="nav">
                <li>
                    <Link to="/sales-agent/dashboard"  className="active">
                        <img src="/temp/images/icons/mainnav/dashboard.png" />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <a href="ui.html" >
                        <img src="/temp/images/icons/mainnav/ui.png" />
                        <span>Team</span>
                    </a>
                </li>
                <li>
                    <Link to="/sales-agent/settings" >
                        <img src="/temp/images/icons/light/icon-cog3.png" width={25} />
                        <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <a href="statistics.html" >
                        <img src="/temp/images/icons/mainnav/statistics.png" />
                        <span>Statistics</span>
                    </a>
                </li>
                <li>
                    <a href="tables.html" >
                        <img src="/temp/images/icons/mainnav/tables.png" />
                        <span>Sales</span>
                    </a>
                </li>
                <li>
                    <a href="other_calendar.html" >
                        <img src="/temp/images/icons/mainnav/other.png" />
                        <span>More Controls</span>
                    </a>
                </li>
            </ul>


        </>
    )
}

export default SalesAgent