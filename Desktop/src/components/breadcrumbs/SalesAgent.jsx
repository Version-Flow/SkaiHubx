
import React from 'react'
import { Link } from 'react-router-dom'

const SalesAgent = () => {
    return (
        <>
            <div className="breadLinks">
                <ul>
                    <li title='Press here to refresh the page'><a href="#" onClick={() => window.location.reload()}>
                        <i className="icos-refresh2" /><strong>Reload Page</strong></a>
                    </li>
                    <li><a href="#" ><i className="icos-check" /><span>Tasks</span> <strong>(0)</strong></a></li>
                    <li className="has">
                        <a><i className="icos-money3" /><span>Reports</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            <li><Link to="#" ><span className="icos-listimg" />Daily Sales</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Sales Summary</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Top-selling Products</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Sales by Product Category</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Employee Sales Performance</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Sales by Region</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Returns & Refunds</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Discounts & Promotions</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Customer Purchase History</Link></li>
                            <li><Link to="#" ><span className="icos-listimg" />Inventory Sales</Link></li>
                        </ul>
                    </li>
                    <li className="has">
                        <a ><i className="icos-cart2" /><span>My Sales</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            <li><Link to="/sales/items-sold"><span className="icos-listimg" />Items Sold</Link></li>
                            <li><Link to="/sales/targets"><span className="icos-listimg" />Sales Target</Link></li>
                            <li><Link to="/sales/transactions"><span className="icos-listimg" />Pending Transactions</Link></li>
                            <li><Link to="/sales/discounts"><span className="icos-listimg" />Discounts & Promotions</Link></li>
                            <li><Link to="/sales/payment-methods"><span className="icos-listimg" />Payment Methods</Link></li>
                            <li><Link to="/sales/alerts"><span className="icos-listimg" />Sales Alerts</Link></li>
                            <li><Link to="/sales/returns"><span className="icos-listimg" />Returns & Refunds</Link></li>
                            <li><Link to="/sales/shift-performance"><span className="icos-listimg" />Shift Performance</Link></li>
                            <li><Link to="/sales/inventory"><span className="icos-listimg" />Inventory Management</Link></li>
                            <li><Link to="/sales/cash-flow"><span className="icos-listimg" />Cash Flow</Link></li>
                            <li><Link to="/sales/customer-data"><span className="icos-listimg" />Customer Demographics</Link></li>
                        </ul>
                    </li>


                </ul>
            </div>

        </>
    )
}

export default SalesAgent