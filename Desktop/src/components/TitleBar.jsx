
import React from 'react'
import Config from '../helpers/config';
const TitleBar = () => {
  return (
    <>
    
      <div id="top">
        <div className="wrapper">
          <a href="index.html"  className="logo logo-annex"><img src="/temp/images/logo.jpg" /></a>
          <div className='appTitle-background'><span className="appTitle">{Config[0].APP_ALLIASE}</span></div>
          {/* Right top nav */}
          <div className="topNav">
            <ul className="userNav">
              <li><a  className="search" /></li>
              <li><a href="#" title='Lock Screen for a while' className="screen" /></li>
              <li><a href="#" title='Log out'  className="logout" /></li>
              <li className="showTabletP"><a href="#"  className="sidebar" /></li>
            </ul>
            <a  className="iButton" />
            {/* <a  className="iTop" /> */}
            <div className="topSearch">
              <div className="topDropArrow" />
              <form action="#">
                <input type="text" placeholder="search..." name="topSearch" />
                <input type="submit" defaultValue />
              </form>
            </div>
          </div>

          {/* Responsive nav */} 
          <ul className="altMenu">
            <li><a href="index.html" >Dashboard</a></li>
            <li><a href="ui.html"  className="exp" id="current">UI elements</a>
              <ul>
                <li><a href="ui.html">General elements</a></li>
                <li><a href="ui_icons.html">Icons</a></li>
                <li><a href="ui_buttons.html">Button sets</a></li>
                <li><a href="ui_grid.html" className="active">Grid</a></li>
                <li><a href="ui_custom.html">Custom elements</a></li>
              </ul>
            </li>
            <li><a href="forms.html"  className="exp">Forms stuff</a>
              <ul>
                <li><a href="forms.html">Inputs &amp; elements</a></li>
                <li><a href="form_validation.html">Validation</a></li>
                <li><a href="form_editor.html">File uploads &amp; editor</a></li>
                <li><a href="form_wizards.html">Form wizards</a></li>
              </ul>
            </li>
            <li><a href="messages.html" >Messages</a></li>
            <li><a href="statistics.html" >Statistics</a></li>
            <li><a href="tables.html"  className="exp">Tables</a>
              <ul>
                <li><a href="tables.html">Standard tables</a></li>
                <li><a href="tables_dynamic.html">Dynamic tables</a></li>
                <li><a href="tables_control.html">Tables with control</a></li>
                <li><a href="tables_sortable.html">Sortable &amp; resizable</a></li>
              </ul>
            </li>
            <li><a href="other_calendar.html"  className="exp">Other pages</a>
              <ul>
                <li><a href="other_calendar.html">Calendar</a></li>
                <li><a href="other_gallery.html">Images gallery</a></li>
                <li><a href="other_file_manager.html">File manager</a></li>
                <li><a href="other_404.html">Sample error page</a></li>
                <li><a href="other_typography.html">Typography</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    
    </>
  )
}

export default TitleBar