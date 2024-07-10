import React, { useState } from "react";
import PropTypes from "prop-types";

import app from "../../assets/images/app.png";
import { Link, NavLink } from "react-router-dom";

Header03.propTypes = {};

function Header03({ clname = "", handleMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };
  return (
    <header id="header" className="header header-style2">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <ul className="usefull-link">
                  <li>
                    <Link to="/employers_v1">For Employers</Link>
                  </li>
                  <li>
                    <Link to="/candidates_v1">For Candidates</Link>
                  </li>
                </ul>
              </div>
              <div className="header-ct-center">
                <div id="logo" className="logo">
                <Link to="/">
    <img
      className="site-logo"
      id="trans-logo"
      src={app}
      alt="Image"
      style={{ height: '70px', width: 'auto' }} // Adjust height and width as needed
    /></Link>
                </div>
                <div className="nav-wrap">
                <nav id="main-nav" className="main-nav">
  <ul id="menu-primary-menu" className="menu">
    <li className={`menu-item ${clname}`}>
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="menu-item">
      <Link to="/jobsingle_v2">Find jobs</Link>
    </li>
    <li className="menu-item">
      <Link to="/employers_v5">Employers</Link>
    </li>
    <li className="menu-item">
      <Link to="/candidates_v2">Candidates</Link>
    </li>
    <li className="menu-item">
      <Link to="/blogsingle_v3">Blog</Link>
    </li>
    <li className="menu-item">
      <Link to="/shopsingle">Pages</Link>
      <ul className="sub-menu st1">
        <li className="nav-sub">
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li className="nav-sub">
          <NavLink to="/createaccount">Create Account</NavLink>
        </li>
        <li className="nav-sub">
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
    </li>
  </ul>
</nav>

                </div>
              </div>
              <div className="header-ct-right">
                <div className="header-customize-item help">
                  <Link to="/termofuse">
                    <span className="icon-help-circle"></span>
                  </Link>
                </div>
                <div className="header-customize-item bell">
                  <span className="icon-bell"></span>
                  <div className="sub-notification">
                    <div className="sub-notification-heading">
                      <div className="sub-notification-title">Notification</div>
                      <span>5 New</span>
                    </div>
                    <div className="sub-notification-content">
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job{" "}
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job{" "}
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                    </div>
                    <div className="sub-notification-button">
                      <Link to="#">Read All</Link>
                    </div>
                  </div>
                </div>
                <div className="header-customize-item login">
                  <Link to="/login">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="#121212"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="#121212"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="item-login">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/createaccount">register</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-filter" onClick={handleMobile}>
                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header03;
