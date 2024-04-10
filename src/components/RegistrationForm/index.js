// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSuccess: false,
    renderFirstNameError: false,
    renderLastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({renderFirstNameError: true, renderLastNameError: true})
    } else if (lastName === '') {
      this.setState({renderLastNameError: true, renderFirstNameError: false})
    } else if (firstName === '') {
      this.setState({renderFirstNameError: true, renderLastNameError: false})
    } else {
      this.setState({
        isSuccess: true,
        renderFirstNameError: false,
        renderLastNameError: false,
      })
    }
  }

  onSubmmitAnotherResponse = () => {
    this.setState({
      isSuccess: false,
      firstName: '',
      lastName: '',
      renderFirstNameError: false,
      renderLastNameError: false,
    })
  }

  renderSuccess = () => (
    <div className="form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="label">Submitted Successfully</p>
      <button type="button" onClick={this.onSubmmitAnotherResponse}>
        Submit Another Response
      </button>
    </div>
  )

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({renderFirstNameError: true})
    } else {
      this.setState({renderFirstNameError: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({renderLastNameError: true})
    } else {
      this.setState({renderLastNameError: false})
    }
  }

  render() {
    const {
      firstName,
      lastName,
      isSuccess,
      renderFirstNameError,
      renderLastNameError,
    } = this.state
    const errorFirstStyle = renderFirstNameError === true ? 'error-style' : ''
    const errorLastStyle = renderLastNameError === true ? 'error-style' : ''
    return (
      <div className="registration-form">
        <h1 className="heading">Registration</h1>
        {isSuccess ? (
          this.renderSuccess()
        ) : (
          <div className="form-container">
            <form onSubmit={this.onSubmitForm}>
              <label className="label" htmlFor="firstName">
                FIRST NAME
              </label>
              <br />
              <input
                type="text"
                id="firstName"
                value={firstName}
                placeholder="First name"
                onChange={this.onChangeFirstName}
                className={`input ${errorFirstStyle}`}
                onBlur={this.onBlurFirstName}
              />
              <br />
              {renderFirstNameError ? (
                <p className="error">Required</p>
              ) : (
                <br />
              )}

              <label htmlFor="lastName" className="label">
                LAST NAME
              </label>
              <br />
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={this.onChangeLastName}
                className={`input ${errorLastStyle}`}
                onBlur={this.onBlurLastName}
              />
              <br />
              {renderLastNameError ? <p className="error">Required</p> : <br />}
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
