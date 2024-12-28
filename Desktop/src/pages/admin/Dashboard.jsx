
import React from 'react'
import { useEffect, useState } from 'react';
import Config from '../../helpers/config';
import { useOutletContext } from 'react-router-dom';

const Dashboard = () => {

  const { setPageTitle, setPageIcon, setBreadcrumbItems } = useOutletContext();

  useEffect(() => {
    const titles = "Sales Dashboard"; const icons = "icon-screen";

    // Set breadcrumb items dynamically
    // setBreadcrumbItems([
    //   // { label: 'Sales', link: '#' },
    // ]);

    setPageTitle(titles); setPageIcon(icons);
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, [setPageTitle, setPageIcon, setBreadcrumbItems]);

  return (
    <>

      <div className="wrapper">
        <ul className="middleNavR">
          <li><a href="#" title="Add an article" className="tipN"><img src="/temp/images/icons/middlenav/create.png"  /></a></li>
          <li><a href="#" title="Upload files" className="tipN"><img src="/temp/images/icons/middlenav/upload.png"  /></a></li>
          <li><a href="#" title="Add something" className="tipN"><img src="/temp/images/icons/middlenav/add.png"  /></a></li>
          <li><a href="#" title="Messages" className="tipN"><img src="/temp/images/icons/middlenav/dialogs.png"  /></a><strong>8</strong></li>
          <li><a href="#" title="Check statistics" className="tipN"><img src="/temp/images/icons/middlenav/stats.png"  /></a></li>
        </ul>
        {/* Chart */}
        <div className="widget chartWrapper">
          <div className="whead"><h6>Charts</h6>
            <div className="titleOpt">
              <a href="#" data-toggle="dropdown"><span className="icos-cog3" /></a>
              <ul className="dropdown-menu pull-right">
                <li><a href="#"><span className="icos-add" />Add</a></li>
                <li><a href="#"><span className="icos-trash" />Remove</a></li>
                <li><a href="#" className><span className="icos-pencil" />Edit</a></li>
                <li><a href="#" className><span className="icos-heart" />Do whatever you like</a></li>
              </ul>
            </div>
          </div>
          <div className="body"><div className="chart" /></div>
        </div>
        {/* 6 + 6 */}

        <div className="fluid">

          {/* Media table */}
          <div className="widget check grid12">
            <div className="whead">
              <span className="titleIcon"><input type="checkbox" id="titleCheck" name="titleCheck" /></span>
              <h6>Media table</h6>
            </div>
            <table cellPadding={0} cellSpacing={0} width="100%" className="tDefault checkAll tMedia" id="checkAll">
              <thead>
                <tr>
                  <td><img src="/temp/images/elements/other/tableArrows.png"  /></td>
                  <td width={50}>Image</td>
                  <td className="sortCol"><div>Description<span /></div></td>
                  <td width={130} className="sortCol"><div>Date<span /></div></td>
                  <td width={120}>File info</td>
                  <td width={100}>Actions</td>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td colSpan={6}>
                    <div className="itemActions">
                      <label>Apply action:</label>
                      <select className="styled">
                        <option value>Select action...</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                        <option value="Move">Move somewhere</option>
                      </select>
                    </div>
                    <div className="tPages">
                      <ul className="pages">
                        <li className="prev"><a href="#" ><span className="icon-arrow-14" /></a></li>
                        <li><a href="#"  className="active">1</a></li>
                        <li><a href="#" >2</a></li>
                        <li>...</li>
                        <li><a href="#" >20</a></li>
                        <li className="next"><a href="#" ><span className="icon-arrow-17" /></a></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td><input type="checkbox" name="checkRow" /></td>
                  <td><a href="/temp/images/big.png"  className="lightbox"><img src="/temp/images/live/face6.png"  /></a></td>
                  <td className="textL"><a href="#" >Image1 description</a></td>
                  <td>Feb 12, 2012. 12:28</td>
                  <td className="fileInfo"><span><strong>Size:</strong> 215 Kb</span><span><strong>Format:</strong> .jpg</span></td>
                  <td className="tableActs d-flex">
                    <a href="#" className="tablectrl_small bDefault tipS" title="Edit"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Remove"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Options"><span className="iconb" data-icon="" /></a>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="checkRow" /></td>
                  <td><a href="/temp/images/big.png"  className="lightbox"><img src="/temp/images/live/face5.png"  /></a></td>
                  <td className="textL"><a href="#" >Image1 description</a></td>
                  <td>Feb 12, 2012. 12:28</td>
                  <td className="fileInfo"><span><strong>Size:</strong> 215 Kb</span><span><strong>Format:</strong> .jpg</span></td>
                  <td className="tableActs">
                    <a href="#" className="tablectrl_small bDefault tipS" title="Edit"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Remove"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Options"><span className="iconb" data-icon="" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}

export default Dashboard