
import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    return (

        <>

            <ul className="nav">
                <li>
                    <a href="/admin/dashboard" className="active">
                        <img src="/temp/images/icons/mainnav/dashboard.png" />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/forum" >
                        <img src="/temp/images/icons/mainnav/ui.png" />
                        <span>Forum</span>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src="/temp/images/icons/mainnav/statistics.png" />
                        <span>Statistics</span>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src="/temp/images/icons/mainnav/tables.png" />
                        <span>Sales</span>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src="/temp/images/icons/mainnav/forms.png" alt />
                        <span>Forms stuff</span>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src="/temp/images/icons/mainnav/messages.png" alt />
                        <span>Messages</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/settings" >
                        <img src="/temp/images/icons/mainnav/other.png" />
                        <span>More Controls</span>
                    </a>
                </li>

            </ul>


        </>
    )
}

export default Admin