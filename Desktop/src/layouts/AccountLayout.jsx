
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AccountLayout = () => {

    const [pageTitle, setPageTitle] = useState('Dashboard');

    return (
        <>

            <div className='auth-container'>
                <div className='container'>
                    {/* Main content to outlet */}
                    <Outlet context={{ setPageTitle }} />

                </div>
            </div>
        </>
    )
}

export default AccountLayout