import React, {Component} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import axios from 'axios'

var NewComponent = React.createClass({
    render: function() {
      return (
            <div>
            <Header />
                <div className="page-wrapper">
                {/* Left Sidenav */}
                <div className="left-sidenav">
                    <div className="main-icon-menu">
                    <nav className="nav">
                        <a href="#MetricaAnalytic" className="nav-link leftmenu-sm-item bg-pink shadow-pink" data-toggle="tooltip-custom" data-placement="right" title data-original-title="Analytics">
                        <svg className="nav-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                            <g>
                            <path d="M184,448h48c4.4,0,8-3.6,8-8V72c0-4.4-3.6-8-8-8h-48c-4.4,0-8,3.6-8,8v368C176,444.4,179.6,448,184,448z" />
                            <path className="svg-primary" d="M88,448H136c4.4,0,8-3.6,8-8V296c0-4.4-3.6-8-8-8H88c-4.4,0-8,3.6-8,8V440C80,444.4,83.6,448,88,448z" />
                            <path className="svg-primary" d="M280.1,448h47.8c4.5,0,8.1-3.6,8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5,0-8.1,3.6-8.1,8.1v207.8
                                                C272,444.4,275.6,448,280.1,448z" />
                            <path d="M368,136.1v303.8c0,4.5,3.6,8.1,8.1,8.1h47.8c4.5,0,8.1-3.6,8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8
                                                C371.6,128,368,131.6,368,136.1z" />
                            </g>
                        </svg>
                        </a>{/*end MetricaAnalytic*/}
                    </nav>{/*end nav*/}
                    </div>{/*end main-icon-menu*/}
                    <div className="main-menu-inner">
                    <div className="menu-body slimscroll">
                        <div id="MetricaAnalytic" className="main-icon-menu-pane active">
                        <div className="title-box">
                            <h6 className="menu-title">Admin Dashboard</h6>       
                        </div>
                        <ul className="nav">
                            <li className="nav-item"><a className="nav-link" href="index.html"><i className="dripicons-meter" />Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link" href="user-management.html"><i className="dripicons-user-group" />User Management</a></li>
                            <li className="nav-item"><a className="nav-link" href="cms-update.html"><i className="dripicons-document" />CMS Update</a></li> 
                            <li className="nav-item"><a className="nav-link" href="ledger.html"><i className="dripicons-document" />Ledger</a></li> 
                            <li className="nav-item"><a className="nav-link" href="kyc-approval.html"><i className="dripicons-document" />KYC Approval</a></li> 
                        </ul>
                        </div>{/* end Analytic */}
                    </div>{/*end menu-body*/}
                    </div>{/* end main-menu-inner*/}
                </div>
                {/* end left-sidenav*/}
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="float-right">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
                                <li className="breadcrumb-item active">KYC Approval</li>
                            </ol>
                            </div>
                            <h4 className="page-title">KYC Approval</h4>
                        </div>{/*end page-title-box*/}
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                    {/* end page title end breadcrumb */}
                    <div className="row">
                        <div className="col-12">
                        <div className="card">
                            <div className="card-body order-list">
                            <h4 className="header-title mt-0 mb-3">KYC Approval</h4>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                <thead className="thead-light">
                                    <tr>
                                    <th className="border-top-0">Date</th>
                                    <th className="border-top-0">Name</th>
                                    <th className="border-top-0">Email</th>
                                    <th className="border-top-0">Country</th>
                                    <th className="border-top-0">Document</th>
                                    <th className="border-top-0">Status</th>
                                    </tr>{/*end tr*/}
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>17-02-2020 05:45 AM</td>
                                    <td>Dr. Chris</td>
                                    <td>drchris@gmail.com</td>                                   
                                    <td>Indonesia</td>
                                    <td>
                                        <button className="btn btn-xs btn-danger">Picture</button>
                                        <button className="btn btn-xs btn-warning">Document</button>
                                    </td>
                                    <td><span className="badge badge-boxed badge-success">Verified</span></td>
                                    </tr>{/*end tr*/}
                                    <tr>
                                    <td>17-02-2020 11:23 AM</td>
                                    <td>Master Thomas</td>
                                    <td>masterthomas@gmail.com</td>                                   
                                    <td>Indonesia</td>
                                    <td>
                                        <button className="btn btn-xs btn-danger">Picture</button>
                                        <button className="btn btn-xs btn-warning">Document</button>
                                    </td>
                                    <td><span className="badge badge-boxed badge-danger">Unverified</span></td>
                                    </tr>{/*end tr*/}
                                    <tr>
                                    <td>17-02-2020 07:22 AM</td>
                                    <td>Senior Shella</td>
                                    <td>seniorshella@gmail.com</td>                                   
                                    <td>Indonesia</td>
                                    <td>
                                        <button className="btn btn-xs btn-danger">Picture</button>
                                        <button className="btn btn-xs btn-warning">Document</button>
                                    </td>
                                    <td><span className="badge badge-boxed badge-success">Verified</span></td>
                                    </tr>{/*end tr*/}
                                    <tr>
                                    <td>17-02-2020 03:44 AM</td>
                                    <td>CEO Agatha</td>
                                    <td>ceoagtha@gmail.com</td>                                   
                                    <td>Indonesia</td>
                                    <td>
                                        <button className="btn btn-xs btn-danger">Picture</button>
                                        <button className="btn btn-xs btn-warning">Document</button>
                                    </td>
                                    <td><span className="badge badge-boxed badge-danger">Unverified</span></td>
                                    </tr>{/*end tr*/}
                                </tbody>
                                </table> {/*end table*/}                                               
                            </div>{/*end /div*/}
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                    </div>{/* container */}
                    <Footer/>
                </div>
                 {/* end page content */}
              </div>
             {/* end page-wrapper */}
        </div>
            )
        }
    })

export default KYCApproval;