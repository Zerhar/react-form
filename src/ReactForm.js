import React, { Component } from 'react';
import Popup from 'react-popup';
import './ReactForm.css';
import './Popup.css';

export default class ReactForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      passwordTwo: '',
      email: '',
      errorMessage: '',
      errorMessageTwo: '',
      errors: {
        userName: false,
        password: false,
        passwordTwo: false,
        email: false
      }
    };
  }

  handleChange = e => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      userName,
      password,
      passwordTwo,
      email
    } = this.state;
    // this.setState({
    //   errors: {
    //     userName: userName === '',
    //     email: email === ''
    //   }
    // });
    if (passwordTwo !== password) {
      this.setState({
        errorMessage: 'Password must be at least 8 characters long',
        errorMessageTwo: 'Password must match',
        errors: {
          userName: userName === '',
          password: password === '',
          passwordTwo: passwordTwo === '',
          email: email === ''
        }
      });
    } else if (password.length < 8 && password.length > 0) {
      this.setState({
        errorMessage: 'Password must be at least 8 characters long',
        errorMessageTwo: 'Password must match',
        errors: {
          userName: userName === '',
          password: password === '',
          passwordTwo: passwordTwo === '',
          email: email === '',
        }
      });
    } else {
      this.setState({
        errorMessage: 'Password must be at least 8 characters long',
        errorMessageTwo: 'Password must match',
        errors: {
          userName: userName === '',
          password: password === '',
          passwordTwo: passwordTwo === '',
          email: email === ''
        }
      });
    }
    if (userName !== '' && password.length >= 8 && passwordTwo !== '' && email !== '' && passwordTwo === password) {
      Popup.create({
        title: 'Sign up complete!',
        content: (
          <div>
            <p><strong>Welcome {userName}!</strong></p>
            {null && <p><strong>Phone:</strong> {null}</p>}
          </div>
        ),
        buttons: {
          right: [{
            text: 'Close',
            action: popup => popup.close()
          }],
        },
      });
    }
  }

  render() {
    return (
      <div className="ReactForm">
        <form onSubmit={this.handleSubmit}>
          <div>
            <p><strong>Username:</strong></p>
              <input
                name="userName"
                type="text"
                value={this.state.userName}
                onChange={this.handleChange}
                className={this.state.errors.userName ? 'error' : ''}
              />
              {this.state.errors.userName && <div className="errorMessage">Required field</div>}
          </div>
          <div>
            <p><strong>Password:</strong></p>
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.errorMessage === 'Password must be at least 8 characters long' && this.state.password.length < 8 ? 'error' : this.state.errors.password ? 'error' : this.state.password.length >= 8 ? '' : ''}
              />
              {this.state.password.length < 8 && this.state.password.length > 0 ? <div className="errorMessage">{this.state.errorMessage}</div>
                : this.state.password === '' && this.state.errors.password && <div className="errorMessage">Required field</div>}
          </div>
          <div>
            <p><strong>Repeat password:</strong></p>
              <input
                name="passwordTwo"
                type="password"
                value={this.state.passwordTwo}
                onChange={this.handleChange}
                className={this.state.errorMessage === 'Password must be at least 8 characters long' && this.state.passwordTwo.length < 8 ? 'error' : this.state.passwordTwo !== this.state.password && this.state.errorMessageTwo === 'Password must match' ? 'error' : this.state.passwordTwo !== this.state.password && this.state.errors.passwordTwo ? 'error' : this.state.passwordTwo === '' && this.state.errors.passwordTwo ? 'error' : ''}
              />
              {this.state.passwordTwo !== this.state.password ? <div className="errorMessage">{this.state.errorMessageTwo}</div>
                : this.state.passwordTwo.length < 8 && this.state.passwordTwo.length > 0 ? <div className="errorMessage">{this.state.errorMessage}</div> : this.state.passwordTwo === '' && this.state.errors.passwordTwo && <div className="errorMessage">Required field</div>}
          </div>
          <div>
            <p><strong>Email:</strong></p>
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                className={this.state.errors.email ? 'error' : ''}
              />
              {this.state.errors.email && <div className="errorMessage">Required field</div>}
          </div>
            <button>Sign up</button>
        </form>
      </div>
    );
  }
}
