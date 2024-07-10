import React, { useState } from "react";
import PropTypes from "prop-types";

import app from "../../assets/images/app.png";
import avt from "../../assets/images/user/avatar/image-01.jpg";
import { Link, NavLink } from "react-router-dom";

HeaderHome2.propTypes = {};

function HeaderHome2({ clname = "", handleMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header" className="header header-default">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
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
              </div>
              <div className="header-ct-center st-1">
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
              <div className="header-ct-right st-1">
                <div className="header-customize-item help">
                  <Link to="/termsofuse">
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
                          Your submit job
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
                <div className="header-customize-item account">
                  <img src={avt} alt="" />
                  <div className="name">Candidates</div>
                </div>
                <div className="header-customize-item button">
                  <Link to="/">Upload Resume</Link>
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

export default HeaderHome2;
