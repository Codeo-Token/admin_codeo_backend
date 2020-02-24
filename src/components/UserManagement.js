import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'


class UserManagement extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    Userdata(){
        axios.get("http://35.247.159.61/users", {})
        .then(res => { 
            const DataUser = res.data
            console.log(DataUser);
            const data = DataUser.map(getData =>
             <tr>
                <td><img src="../assets/images/users/user-10.jpg" alt="" className="thumb-sm rounded-circle mr-2" />{getData.name}<small className="badge badge-soft-pink ml-1">New</small></td>
                <td>{getData.email}</td>
                <td>{getData.id_country}</td>
                <td>
                    <a href="#" className="mr-2"><i className="fas fa-edit text-info font-16" /></a>
                    <a href="#" className="mr-2"><i className="fas fa-key text-info font-16" /></a>
                    <a href="#"><i className="fas fa-trash-alt text-danger font-16" /></a>
                </td>
            </tr>
            
            )
            this.setState({
                data
            })
        });
    }

    componentDidMount(){
        this.Userdata()
    }
    render() {
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
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"><i className="dripicons-meter" />Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="user-management.html"><i className="dripicons-user-group" />User Management</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="cms-update.html"><i className="dripicons-document" />CMS Update</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="ledger.html"><i className="dripicons-document" />Ledger</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="kyc-approval.html"><i className="dripicons-document" />KYC Approval</a>
                                </li>
                            </ul>
                        </div>{/* end Analytic */}
                    </div>{/*end menu-body*/}
                </div>{/* end main-menu-inner*/}
            </div>
            {/* end left-sidenav*/} {/* Page Content*/}
            <div className="page-content">
                <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-right">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Admin</a></li>
                                        <li className="breadcrumb-item active">User Management</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">User Management</h4>
                            </div>{/*end page-title-box*/}
                        </div>{/*end col*/}
                    </div>
                    {/* end page title end breadcrumb */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <button type="button" className="btn btn-gradient-primary waves-effect waves-light float-right mb-3" data-toggle="modal" data-animation="bounce" data-target=".bs-example-modal-lg">+ Add New</button>
                                    <h4 className="header-title mt-0">User Details</h4>
                                    <div className="table-responsive dash-social">
                                        <table id="datatable" className="table">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Country</th>
                                                    <th>Action</th>
                                                </tr>{/*end tr*/}
                                            </thead>
                                            <tbody>
                                                {this.state.data}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>{/*end card-body*/}
                            </div>{/*end card*/}
                        </div> {/*end col*/}
                    </div>{/*end row*/}
                </div>{/* container */} {/* Modal content for the above example */}
                <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title mt-0" id="myLargeModalLabel">Add News</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="Title">Nama</label>
                                                <input type="text" className="form-control" id="Nama" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="status-select" className="mr-2">Country</label>
                                                <select className="custom-select" id="status-select">
                                                    <option selected>Choose Category</option>
                                                    <option value={1}>Indonesia</option>
                                                    <option value={2}>Other Planet</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="Email">Email</label>
                                                <input type="email" className="form-control" id="Email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-gradient-primary">Save</button>
                                    <button type="button" className="btn btn-sm btn-gradient-danger">Delete</button>
                                </form>
                            </div>
                        </div>{/* /.modal-content */}
                    </div>{/* /.modal-dialog */}
                </div>{/* /.modal */}
                <Footer />
            </div>
            {/* end page content */}
        </div>
        {/* end page-wrapper */}
    </div>
        )
    }
}

export default UserManagement;