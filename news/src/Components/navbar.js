import React from 'react';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
import '../style/navbar.css';

function Navbar() {
    return (
        <>
            <nav className="menu">
                <div className="container-sluied">
                    {/* <div className="brand">
                        <Link to="/Home"><a href="#">
                            <img src="images/logo.png" alt="Magz Logo" />
                        </a></Link>
                        
                    </div> */}
                    {/* <div className="mobile-toggle">
                        <a href="#" data-toggle="menu" data-target="#menu-list">
                            <i className="ion-navicon-round" />
                        </a>
                    </div> */}
                    {/* <div className="mobile-toggle">
                        <a href="#" data-toggle="sidebar" data-target="#sidebar">
                            <i className="ion-ios-arrow-left" />
                        </a>
                    </div> */}
                    <div id="m">
                        <ul className="nav-list">
                            {/* <li className="for-tablet nav-title">
                                <a>Menu</a>
                            </li> */}
                            {/* <li className="for-tablet">
                                <a href="login.html">Login</a>
                            </li>
                            <li className="for-tablet">
                                <a href="register.html">Register</a>
                            </li> */}
                            <li>
                                <span>
                                    <Link to="/Home">
                                        <a href="index.html">
                                            <img src="images/logo.png" alt="Magz Logo" width="33%" />
                                        </a>
                                    </Link>
                                </span>
                            </li>
                            <li className="dropdown magz-dropdown" id="center">
                                <Link to="/Home">
                                    <a href="category.html">Home </a>
                                </Link>
                            </li>
                            <li className="dropdown magz-dropdown">
                                <Link to="/About">
                                    <a href="category.html">About Us </a>
                                </Link>
                            </li>
                            <li className="dropdown magz-dropdown">
                                <Link to="/Contact">
                                    <a href="category.html">Contact Us </a>
                                </Link>
                            </li>
                            <li className="dropdown magz-dropdown">
                                <a href="#">
                                    News <i className="ion-ios-arrow-right" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="category.html" />
                                    </li>
                                    <Link to="/Business" className='linkdrop'>
                                        <li className="dropdown magz-dropdown">
                                            <a href="category.html">Business</a>
                                        </li>
                                    </Link>
                                    <Link to="/Sport" className='linkdrop'>
                                        <li>
                                            <a href="category.html">Sport</a>
                                        </li>
                                    </Link>
                                    <Link to="/Financial" className='linkdrop'>
                                        <li className="dropdown magz-dropdown">
                                            <a href="#">Financial</a>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                            <ul className="nav-icons" id="m1">
                                <Link to='/Register' className='linkmenu'>
                                    <li className='menutab'>
                                        <a href="register.html">
                                            <span className="ion-person-add" />
                                            &nbsp;Register
                                        </a>
                                    </li>
                                </Link>
                                <Link to='/Login' className='linkmenu'>
                                    <li className='menutab'>
                                        <a href="login.html">
                                            <i className="ion-person" />
                                            &nbsp;Login
                                        </a>
                                    </li>
                                </Link>
                                <li className="dropdown magz-dropdown">
                                    <a href="#">
                                        User Name <i className="ion-ios-arrow-right" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#">
                                                <i className="icon ion-person" /> My Account
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon ion-chatbox" /> Comments
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon ion-log-out" /> Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* ////////////////////small categories//////////// */}
            <div className="firstbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 col-sm-12"></div>
                        <div className="col-md-7 col-sm-12 ">
                            <form className="search" autoComplete="off">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="q"
                                            className="form-control"
                                            placeholder="Type something here"
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary">
                                                <i className="ion-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="help-block">
                                    <div>Popular:</div>
                                    <ul>
                                        <li>
                                            <a href="#">Business ,</a>
                                        </li>
                                        <li>
                                            <a href="#">Sport ,</a>
                                        </li>
                                        <li>
                                            <a href="#">Financial </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="d-flex justify-content-between align-items-center breaking-news "
                                    style={{ backgroundColor: "#252e38", color: "aliceblue", fontSize: "1.5em" }}
                                >
                                    <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news">
                                        <span className="d-flex align-items-center">&nbsp; Global News</span>
                                    </div>
                                    <marquee
                                        className="news-scroll"
                                        behavior="scroll"
                                        direction="left"
                                        onmouseover="this.stop();"
                                        onmouseout="this.start();"
                                    >
                                        {" "}
                                        <a href="#">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt mollit anim id est laborum.{" "}
                                        </a>{" "}
                                        <span className="dot" />{" "}
                                        <a href="#">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut{" "}
                                        </a>{" "}
                                        <span className="dot" />{" "}
                                        <a href="#">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
                                        </a>
                                    </marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Navbar;