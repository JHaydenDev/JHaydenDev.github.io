import React, { Component } from "react";
import axios from "axios";


const GOOGLE_FORM_MESSAGE_ID = "entry.839337160";
const GOOGLE_FORM_EMAIL_ID = "entry.1045781291";
const CORS_PROXY = "https://cors-escape.herokuapp.com/";
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLScu94WMCzap_LGPhAFEu2Sib8SivvL5-QWmHN2nTOD-SSz6Ug/formResponse?edit2=2_ABaOnud6_7lJD-2FEGn4OYl_sKqUXheoO_vGDTU267DN";

class ContactBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      email: "",
      showForm: false,
      sendingMessage: false,
      messageSent: false,
      messageError: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      sendingMessage: true
    });
    this.sendMessage();
  };

  handleFormToggle = () => {
    this.setState(prevState => {
      const { showForm } = prevState;
      return {
        showForm: !showForm
      };
    });
  };

  handleReturnButton = () => {
    this.setState({
      showForm: false,
      messageSent: false,
      messageError: false
    });
  };

  sendMessage = () => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message);
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email);

    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
      .then(() => {
        this.setState({
          messageSent: true,
          sendingMessage: false,
          message: "",
          email: ""
        });
      })
      .catch(() => {
        this.setState({
          messageError: true,
          sendingMessage: false
        });
      });
  };

  returnButton = () => (
    <button
      id="return-button"
      className="btn btn-default btn-xs"
      onClick={this.handleReturnButton}
    >
      Return
    </button>
  );

  render() {
    if (this.state.sendingMessage) {
      return <div>Sending...</div>;
    }

    if (this.state.messageSent) {
      return (
        <React.Fragment>
          <div className="success-message">Sent! I will respond ASAP!</div>
          {this.returnButton()}
        </React.Fragment>
      );
    }

    if (this.state.messageError) {
      return (
        <React.Fragment>
          <div className="error-message">
            Sorry, your message was not sent. Contact me at:
            josephhaydendevelopment@gmail.com
          </div>
          {this.returnButton()}
        </React.Fragment>
      );
    }

    if (this.state.showForm === false) {
      return (
        <button
          id="contact-button"
          className="btn btn-sm"
          onClick={this.handleFormToggle}
        >
          Contact
        </button>
      );
    }

    return (
      <React.Fragment>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="message" className="col-sm-2 col-form-label">
                Message:
              </label>
              <div className="col-sm-8">
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  required
                  value={this.state.message}
                  onChange={this.handleChange}
                  rows="6"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                id="cancel-button"
                className="btn btn-default btn-sm btn-action"
                onClick={this.handleFormToggle}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-sm btn-default btn-action"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactBox;
