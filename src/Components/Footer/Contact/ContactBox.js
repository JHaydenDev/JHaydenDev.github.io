import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Buttons = styled.button`
  color: white;
  background-color: Transparent;
  border: 1px solid white;
  margin: 5%;
  padding: 2%;
  &:hover {
    border: 1px solid aqua;
    color: aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

const ContactButton = styled.button`
  color: white;
  background-color: Transparent;
  border: 1px solid white;
  margin: 5%;
  height: 150px;
  width: 200px;
  padding: 2%;
  &:hover {
    border: 1px solid aqua;
    color: aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

const MessageBox = styled.textarea`
  height: 150px;
`;

const GOOGLE_FORM_MESSAGE_ID = "entry.839337160";
const GOOGLE_FORM_EMAIL_ID = "entry.1045781291";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLScu94WMCzap_LGPhAFEu2Sib8SivvL5-QWmHN2nTOD-SSz6Ug/formResponse";

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
    <Buttons
      id="return-button"
      className="btn btn-default btn-xs"
      onClick={this.handleReturnButton}
    >
      Return
    </Buttons>
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
      return (   <Fade cascade>
        <ContactButton onClick={this.handleFormToggle}>
          Contact Form
        </ContactButton>
        </Fade>
      );
    }

    return (
      <React.Fragment>
            <Fade cascade>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <div>
                <MessageBox
                  id="message"
                  name="message"
                  required
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <Buttons
                type="button"
                id="cancel-button"
                onClick={this.handleFormToggle}
              >
                Cancel
              </Buttons>
              <Buttons type="submit">Submit</Buttons>
            </div>
          </form>
        </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default ContactBox;
