import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import Shapes from './shapes';
import ISeeYou from './iseeyou';

// App
export default class Contact extends Component {
	constructor(props) {
      super(props);

      this.state = {
			success: false,
			url: '/sayHello',
			contactname: '',
			contactnameError: false,
			text: '',
			textError: false,
			email: '',
			emailError: false,
			emailInvalidError: false,
			sent: false,
			sending: false,
			sentError: false
      }
  }

	handleNameChange(e) {
		this.setState({
			contactname: e.target.value
		});
		// Validate name
		if (this.state.contactname.length > 0) {
			this.setState({
				contactnameError: false
			});
		}
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		});
		// Validate email
		if (this.state.email.length > 0) {
			this.setState({
				emailError: false
			});
		}
	}

	validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	handleTextChange(e) {
		this.setState({
			text: e.target.value
		});
		// Validate text
		if (this.state.text.length > 0) {
			this.setState({
				textError: false
			});
		}
	}

  handleSubmit(e) {
    e.preventDefault();
	// Validate name
	if (this.state.contactname.length < 1) {
		this.setState({
			contactnameError: true
		});
	}
	// Validate message
	if (this.state.text.length < 1) {
		this.setState({
			textError: true
		});
	}
	// Validate email field
	if (this.state.email.length < 1) {
		this.setState({
			emailError: true
		});
	}
	// if (this.validateEmail(this.state.email) == false) {
	// 	this.setState({
	// 		emailError: true
	// 	});
	// }
	// Check if any errors before sending
	if (this.state.contactnameError || this.state.emailError || this.state.textError) {
		return;
	}
	// Send
    var contactname = this.state.contactname.trim();
    var text = this.state.text.trim();
	var email = this.state.email.trim();
    if (!text || !contactname || !email) {
      return;
    }
    this.handleCommentSubmit({
		name: contactname,
		text: text,
		email: email
	});
    this.setState({
		sending: true
	});
  }

	handleCommentSubmit(comment) {
	 $.ajax({
		 url: this.state.url,
		 dataType: 'json',
		 type: 'POST',
		 data: comment,
		 success: function(data) {
			 this.setState({
				 sent: true
			 });
		 }.bind(this),
		 error: function(xhr, status, err) {
			 console.error(this.state.url, status, err.toString());
			 this.setState({
				sent: true,
				sendError: true
		 	});
		 }.bind(this)
	 });
		fetch(this.state.url, {
			method: 'post',
			body: JSON.stringify({
				data: comment
			}).replace(/{|}/gi, "")
		})
	}

	render() {
        return (
          <section className="home-contact">
			{/* Shapes */}
			<Shapes/>

            {/* Text */}
			<ISeeYou classesForChild="banner-text">
				<div className="row">
	              <h2>Lets make something <span>great together —</span></h2>
	              <div className="cols">
	                <div className="left-col">
						{ this.state.sent ? (
							<div className="commentForm">
								{ this.state.sendError ? (
									<div className="message success">
										Thanks for your message {this.state.contactname}, I will get back to you as quickly as I can :)
									</div>
								) : (
									<div className="message failure">
										Sorry, there was an error sending the message. Please find me on Twitter and message me there, to let me know my website sucks and can't sent messages :)
									</div>
								)}
							</div>
						) : (
							<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
	                    <div className="field">
	                      <input
							ref="contactname"
							type="text"
							placeholder="Name*"
							value={this.state.contactname}
							onChange={this.handleNameChange.bind(this)}
						  />
						  { this.state.contactnameError ? <div className="message error">Please enter your name</div> : "" }
	                    </div>
	                    <div className="field">
	                      <input
							ref="email"
							type="text"
							placeholder="Email*"
							value={this.state.email}
			          		onChange={this.handleEmailChange.bind(this)}
							/>
							{ this.state.emailError ? <div className="message error">Please enter your email</div> : "" }
	                    </div>
	                    <div className="field">
	                      <textarea
										rows={5}
										ref="text"
										placeholder="Message*"
										name="message"
										value={this.state.text}
			          		onChange={this.handleTextChange.bind(this)}
						/>
						{ this.state.textError ? <div className="message error">Please enter your message</div> : "" }
						</div>
	                    <div className="field">
	                      <input type="submit" value="Send Enquiry" />
	                    </div>
	                  </form>
									)}
	                </div>
	                <div className="right-col">
	                  <h5>What should I chat about?</h5>
	                  <p>I am currently open to job offers in Sydney or Melbourne, looking specifically for roles where I can use my front-end development expertise to achieve goals.</p>
										<h5>Icebreakers</h5>
	                  <p>Please feel very welcome talk to me about the following things:</p>
										<ul>
											<li>Ritz crackers > Jatz crackers?</li>
											<li>How good was <a href="#">Party Down</a></li>
											<li>Paul F. Tompkins on podcasts</li>
										</ul>
									</div>
	              </div>
				</div>
            </ISeeYou>
          </section>
        );
    }
};
