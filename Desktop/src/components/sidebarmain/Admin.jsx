
import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    return (

        <>

            <ul className="nav">
                <li>
                    <a href="index.html" title className="active">
                        <img src="/temp/images/icons/mainnav/dashboard.png" alt />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="ui.html" >
                        <img src="/temp/images/icons/mainnav/ui.png" alt />
                        <span>UI elements</span>
                    </a>
                </li>
                <li>
                    <a href="forms.html" >
                        <img src="/temp/images/icons/mainnav/forms.png" alt />
                        <span>Forms stuff</span>
                    </a>
                </li>
                <li>
                    <a href="messages.html" >
                        <img src="/temp/images/icons/mainnav/messages.png" alt />
                        <span>Messages</span>
                    </a>
                </li>
                <li>
                    <a href="statistics.html" >
                        <img src="/temp/images/icons/mainnav/statistics.png" alt />
                        <span>Statistics</span>
                    </a>
                </li>
                <li>
                    <a href="tables.html" >
                        <img src="/temp/images/icons/mainnav/tables.png" alt />
                        <span>Tables</span>
                    </a>
                </li>
                <li>
                    <a href="other_calendar.html" >
                        <img src="/temp/images/icons/mainnav/other.png" alt />
                        <span>Other pages</span>
                    </a>
                </li>
            </ul>


        </>
    )
}

export default Admin