
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
                    <li><a href="#" ><span>Tickets</span> <strong>(0)</strong></a></li>
                    <li><a href="#" ><span>Request</span> <strong>(0)</strong></a></li>
                    <li><a href="#" ><span>Revenue</span> <strong>(0)</strong></a></li>
                    <li className="has">
                        <a>
                            <i className="icos-folder" />
                            <span>Reports</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            {/* Reports */}
                            <li><Link to="#"><span className="icos-listimg" />Sales Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Inventory Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Performance Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Customer Activity Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Low Stock Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Profit & Loss Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Purchase Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Returns & Refunds Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Tax Report</Link></li>
                        </ul>
                    </li>
                    <li className="has">
                        <a>
                            <i className="icos-documents" />
                            <span>Invoices</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>

                            {/* Invoices */}
                            <li><Link to="#"><span className="icos-listimg" />View All Invoices</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Generate Invoice</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Download Invoices</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Invoice Templates</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Payment Terms</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Invoice Payment Status</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />View Paid Invoices</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />View Pending Invoices</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Invoice Customization</Link></li>
                        </ul>
                    </li>

                    <li className="has">
                        <a>
                            <i className="icos-stand" />
                            <span>Products</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            <li><Link to="#"><span className="icos-listimg" />View All Products</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Products</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Parent Categories</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Categories</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Sub Categories</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Brands</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Models</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Sizes</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Tags</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Expired Products</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Low Stock Products</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Discounts</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Product Reviews</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Bulk Import/Export</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Product Return Rules</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Price Settings</Link></li>
                        </ul>
                    </li>

                    <li className="has">
                        <a >
                            <i className="icos-users" />
                            <span>Supplier</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            <li><Link to="#"><span className="icos-listimg" />Manage Suppliers</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Contact Information</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Payment Terms</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Products</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Invoices</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Performance</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Returns</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Supplier Contracts</Link></li>
                        </ul>
                    </li>
                    <li className="has">
                        <a>
                            <i className="icos-cart2" />
                            <span>Sales</span>
                            <span><img src="/temp/images/elements/control/hasddArrow.png" /></span>
                        </a>
                        <ul>
                            <li><Link to="#"><span className="icos-listimg" />View Sales</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Sales Report</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Approve Transactions</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Assign Seller</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Sales Analytics</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Sales Dashboard</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Discounts & Offers</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Track Order Status</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Sales Targets</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />View Customer Feedback</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Refund & Return Requests</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Manage Channels</Link></li>
                            <li><Link to="#"><span className="icos-listimg" />Inventory Integration</Link></li>
                        </ul>
                    </li>



                </ul>
            </div>

        </>
    )
}

export default Admin