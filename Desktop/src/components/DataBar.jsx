
import React from 'react'


const DataBar = ({ title, icon }) => {
  return (
    <>

      <div className="contentTop">
        <span className="pageTitle"><span className={icon} />{title}</span>
        <ul className="quickStats">
          <li>
            <a href="#" className="blueImg"><img src="/temp/images/icons/quickstats/plus.png" /></a>
            <div className="floatR"><strong className="blue">5489</strong><span>visits</span></div>
          </li>
          <li>
            <a href="#" className="redImg"><img src="/temp/images/icons/quickstats/user.png" /></a>
            <div className="floatR"><strong className="blue">4658</strong><span>users</span></div>
          </li>
          <li>
            <a href="#" className="greenImg"><img src="/temp/images/icons/quickstats/money.png" /></a>
            <div className="floatR"><strong className="blue">1289</strong><span>orders</span></div>
          </li>
        </ul>
      </div>


    </>
  )
}

export default DataBar