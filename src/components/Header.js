import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        return (
            <div>
                {/* Top Bar Start */}
                <div className="topbar">
                    {/* LOGO */}
                    <div className="topbar-left">
                        <a href="../analytics/analytics-index.html" className="logo">
                            <span>
                            <img src="../assets/images/codeoku.png" alt="logo-small" className="logo-sm" />
                            </span>
                            <span>
                            <img src="../assets/images/codeo.png" alt="logo-large" className="logo-lg" style={{height: '65px'}} />
                            </span>
                        </a>
                    </div>
                    {/*end logo*/} {/* Navbar */}
                    <nav className="navbar-custom">
                        <ul className="list-unstyled topbar-nav float-right mb-0">
                            <li className="dropdown notification-list">
                                <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="dripicons-bell noti-icon" />
                                    <span className="badge badge-danger badge-pill noti-icon-badge">2</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                                    {/* item*/}
                                    <h6 className="dropdown-item-text">
                                Notifications (18)
                                </h6>
                                    <div className="slimscroll notification-list">
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item active">
                                            <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline" /></div>
                                            <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-warning"><i className="mdi mdi-message" /></div>
                                            <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-info"><i className="mdi mdi-glass-cocktail" /></div>
                                            <p className="notify-details">Your item is shipped<small className="text-muted">It is a long established fact that a reader will</small></p>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline" /></div>
                                            <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-danger"><i className="mdi mdi-message" /></div>
                                            <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                                        </a>
                                    </div>
                                    {/* All*/}
                                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
                                View all <i className="fi-arrow-right" />
                                </a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="../assets/images/users/user-4.jpg" alt="profile-user" className="rounded-circle" />
                                    <span className="ml-1 nav-user-name hidden-sm">Amelia <i className="mdi mdi-chevron-down" /> </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="auth-login.html"><i className="dripicons-user text-muted mr-2" /> Login</a>
                                    <a className="dropdown-item" href="page-profile.html"><i className="dripicons-user text-muted mr-2" /> Profile</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#"><i className="dripicons-exit text-muted mr-2" /> Logout</a>
                                </div>
                            </li>
                        </ul>
                        {/*end topbar-nav*/}
                        <ul className="list-unstyled topbar-nav mb-0">
                            <li>
                                <button className="button-menu-mobile nav-link waves-effect waves-light">
                                    <i className="dripicons-menu nav-icon" />
                                </button>
                            </li>
                        </ul>
                    </nav>
                    {/* end navbar*/}
                </div>
                {/* Top Bar End */}
            </div>
        )
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));