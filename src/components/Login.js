import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(
            <div className="account-body accountbg">
                {/* Log In page */}
                <div className="row vh-100 ">
                    <div className="col-12 align-self-center">
                        <div className="auth-page">
                            <div className="card auth-card shadow-lg">
                                <div className="card-body">
                                    <div className="px-3">
                                        <div className="auth-logo-box">
                                            <a href="index.html" className="logo logo-admin"><img src="../assets/images/codeoku.png" height={55} alt="logo" className="auth-logo" /></a>
                                        </div>{/*end auth-logo-box*/}
                                        <div className="text-center auth-logo-text">
                                            <h4 className="mt-0 mb-3 mt-5">Codeo Admin</h4>
                                            <p className="text-muted mb-0">Sign in to continue to Acess Backend.</p>
                                        </div> {/*end auth-logo-text*/}
                                        <form className="form-horizontal auth-form my-4" onSubmit={ this.handleSubmit }>
                                            <div className="form-group">
                                                <label htmlFor="username">Email</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                        <i className="dripicons-user" /> 
                                        </span>
                                                    <input type="email" name="email" className={classnames('form-control', {'is-invalid': errors.email})} id="email" placeholder="Enter email"  onChange={ this.handleInputChange } value={ this.state.email } />
                                                </div>
                                                {errors.email && (<div className="invalid-feedback pesanerror" style={{display:'block !important'}}>{errors.email}</div>)}
                                            </div>{/*end form-group*/}
                                            <div className="form-group">
                                                <label htmlFor="userpassword">Password</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                        <i className="dripicons-lock" /> 
                                        </span>
                                                    <input type="password" name="password" className={classnames('form-control', {'is-invalid': errors.password})} id="userpassword" placeholder="Enter password" onChange={ this.handleInputChange } value={ this.state.password } />
                                                </div>
                                                {errors.password && (<div className="invalid-feedback pesanerror">{errors.password}</div>)}
                                            </div>{/*end form-group*/}
                                            <div className="form-group row mt-4">
                                                <div className="col-sm-6">
                                                    <div className="custom-control custom-switch switch-success">
                                                        <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" />
                                                        <label className="custom-control-label text-muted" htmlFor="customSwitchSuccess">Remember me</label>
                                                    </div>
                                                </div>{/*end col*/}
                                            </div>{/*end form-group*/}
                                            <div className="form-group mb-0 row">
                                                <div className="col-12 mt-2">
                                                    <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="submit">Log In <i className="fas fa-sign-in-alt ml-1" /></button>
                                                </div>{/*end col*/}
                                            </div> {/*end form-group*/}
                                        </form>{/*end form*/}
                                    </div>{/*end /div*/}
                                </div>{/*end card-body*/}
                            </div>{/*end card*/}
                        </div>{/*end auth-page*/}
                    </div>{/*end col*/}
                </div>{/*end row*/} {/* End Log In page */}
            </div>
        )
    }
}


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)