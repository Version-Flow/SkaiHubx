
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
          <li><a href="#" title="Add an article" className="tipN"><img src="/temp/images/icons/middlenav/create.png" alt /></a></li>
          <li><a href="#" title="Upload files" className="tipN"><img src="/temp/images/icons/middlenav/upload.png" alt /></a></li>
          <li><a href="#" title="Add something" className="tipN"><img src="/temp/images/icons/middlenav/add.png" alt /></a></li>
          <li><a href="#" title="Messages" className="tipN"><img src="/temp/images/icons/middlenav/dialogs.png" alt /></a><strong>8</strong></li>
          <li><a href="#" title="Check statistics" className="tipN"><img src="/temp/images/icons/middlenav/stats.png" alt /></a></li>
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

          <div className="widget grid6">
            <div className="whead"><h6>Table with hidden toolbar</h6></div>
            <div id="dyn" className="hiddenpars">
              <a className="tOptions" title="Options"><img src="/temp/images/icons/options.html" alt /></a>
              <table cellPadding={0} cellSpacing={0} border={0} className="dTable" id="dynamic">
                <thead>
                  <tr>
                    <th>Rendering engine<span className="sorting" style={{ display: 'block' }} /></th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="gradeX">
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0</td>
                    <td>Win 95+</td>
                    <td className="center">4</td>
                  </tr>
                  <tr className="gradeC">
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.0</td>
                    <td>Win 95+</td>
                    <td className="center">5</td>
                  </tr>
                  <tr className="gradeA">
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.5</td>
                    <td>Win 95+</td>
                    <td className="center">5.5</td>
                  </tr>
                  <tr className="gradeA">
                    <td>Trident</td>
                    <td>Internet
                      Explorer 6</td>
                    <td>Win 98+</td>
                    <td className="center">6</td>
                  </tr>
                  <tr className="gradeA">
                    <td>Trident</td>
                    <td>Internet Explorer 7</td>
                    <td>Win XP SP2+</td>
                    <td className="center">7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Media table */}
          <div className="widget check grid6">
            <div className="whead">
              <span className="titleIcon"><input type="checkbox" id="titleCheck" name="titleCheck" /></span>
              <h6>Media table</h6>
            </div>
            <table cellPadding={0} cellSpacing={0} width="100%" className="tDefault checkAll tMedia" id="checkAll">
              <thead>
                <tr>
                  <td><img src="/temp/images/elements/other/tableArrows.png" alt /></td>
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
                        <li className="prev"><a href="#" title><span className="icon-arrow-14" /></a></li>
                        <li><a href="#" title className="active">1</a></li>
                        <li><a href="#" title>2</a></li>
                        <li><a href="#" title>3</a></li>
                        <li><a href="#" title>4</a></li>
                        <li>...</li>
                        <li><a href="#" title>20</a></li>
                        <li className="next"><a href="#" title><span className="icon-arrow-17" /></a></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td><input type="checkbox" name="checkRow" /></td>
                  <td><a href="/temp/images/big.png" title className="lightbox"><img src="/temp/images/live/face3.png" alt /></a></td>
                  <td className="textL"><a href="#" title>Image1 description</a></td>
                  <td>Feb 12, 2012. 12:28</td>
                  <td className="fileInfo"><span><strong>Size:</strong> 215 Kb</span><span><strong>Format:</strong> .jpg</span></td>
                  <td className="tableActs">
                    <a href="#" className="tablectrl_small bDefault tipS" title="Edit"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Remove"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Options"><span className="iconb" data-icon="" /></a>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="checkRow" /></td>
                  <td><a href="/temp/images/big.png" title className="lightbox"><img src="/temp/images/live/face7.png" alt /></a></td>
                  <td className="textL"><a href="#" title>Image1 description</a></td>
                  <td>Feb 12, 2012. 12:28</td>
                  <td className="fileInfo"><span><strong>Size:</strong> 215 Kb</span><span><strong>Format:</strong> .jpg</span></td>
                  <td className="tableActs">
                    <a href="#" className="tablectrl_small bDefault tipS" title="Edit"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Remove"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Options"><span className="iconb" data-icon="" /></a>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="checkRow" /></td>
                  <td><a href="/temp/images/big.png" title className="lightbox"><img src="/temp/images/live/face6.png" alt /></a></td>
                  <td className="textL"><a href="#" title>Image1 description</a></td>
                  <td>Feb 12, 2012. 12:28</td>
                  <td className="fileInfo"><span><strong>Size:</strong> 215 Kb</span><span><strong>Format:</strong> .jpg</span></td>
                  <td className="tableActs">
                    <a href="#" className="tablectrl_small bDefault tipS" title="Edit"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Remove"><span className="iconb" data-icon="" /></a>
                    <a href="#" className="tablectrl_small bDefault tipS" title="Options"><span className="iconb" data-icon="" /></a>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="checkRow" /></td>
                  <td><a href="/temp/images/big.png" title className="lightbox"><img src="/temp/images/live/face5.png" alt /></a></td>
                  <td className="textL"><a href="#" title>Image1 description</a></td>
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