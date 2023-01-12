import React from 'react';
import logo from '../../assets/images/logo-7.png';
import Navigation from '../Navigation';

function HeaderService() {
    return (
        <>
            <header className="appie-header-area appie-header-page-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-3 header-nav-box-inner-page">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <a href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderService;
