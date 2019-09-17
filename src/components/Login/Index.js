import React, {Component} from 'react';
import axios from 'axios';
import './login.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    // when user press on login button
    handlerSubmit = (e) => {
        e.preventDefault();

        axios.post('http://35.201.2.209:8000/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log(res.data);
                localStorage.setItem("token" , res.data);
                this.props.handlerToken(res.data);
                this.setState({
                    error: ''
                })
            })
            .catch(err => {
                this.setState({
                    error: 'Credentials are wrong'
                })
            });
    };

    handlerEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handlerPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                            <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handlerSubmit}>
					        <span className="login100-form-title p-b-32 heading">
						        Login
					        </span>

                                <div className="input-icons">
                                    <i className="fa fa-envelope icon">
                                    </i>
                                    <input className="input-field input100"
                                           type="text"
                                           value={this.state.email}
                                           onChange={e => this.handlerEmail(e)}
                                           placeholder="Username"
                                           name="username"
                                    />
                                </div>

                                <div className="input-icons">
                                    <i className="fa fa-key icon">
                                    </i>
                                    <input className="input-field input100"
                                           type="password"
                                           value={this.state.password}
                                           onChange={e => this.handlerPassword(e)}
                                           placeholder="Password"
                                           name="pass"
                                    />
                                </div>

                                {
                                    this.state.error != '' &&
                                    <b><p style={{color: 'red'}}>{this.state.error}</p></b>
                                }


                                <div className="container-login100-form-btn">
                                    <button type="submit" className="login100-form-btn login-button">
                                        Login
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


                <div id="dropDownSelect1"></div>
            </div>
        );
    }
}

export default Index;
