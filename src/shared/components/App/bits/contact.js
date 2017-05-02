import React, { Component } from 'react';

// Utils
import 'whatwg-fetch';
import * as _ from 'lodash';

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
		console.log(comment);
		fetch(this.state.url, {
			method: 'post',
			headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
			body: JSON.stringify(comment)
		}).then( res => {
				if(res.ok) {
					return res.json();
				} else {
					console.log('Network response was not ok.');
					window.alert('Could not connect, please try again later.');
				}
		}).then( data => {
			console.log('Submitted form', this.state);
			this.setState({
				sent: true
			});
		}).catch(error => {
			console.error(this.state.url, error.toString());
			this.setState({
			 sent: true,
			 sendError: true
		 });
		})
	}

	render() {
        return (
          <section className="home-contact">
						{/* BG */}
						<div className="bg-bits">
							<div className="contain">
								<h2>Contact</h2>
							</div>
						</div>

            {/* Text */}
			<ISeeYou classesForChild="lineof-text">
				<div className="row">
					<div className="shape-holder">
						{/* Shape 11 */}
						<div className="shape shape-1">
							<div className="shape-center">
								<svg id="shape-11" viewBox="0 0 68.6 21.3" width="68.6" height="21.3">
									<path className="line" d="M64.1 4.5C47.6 21 21 21 4.5 4.5" />
									<ellipse className="circle" transform="rotate(-45.001 64.074 4.5)" cx="64.1" cy="4.5" rx="4.5" ry="4.5"/>
								</svg>
							</div>
						</div>

						{/* Shape 12 */}
						<div className="shape shape-2">
							<div className="shape-center">
								<div className="shape-spin">
									<div className="shape-float">
										<svg id="shape-12" viewBox="0 0 54.4 27.3" width="54.4" height="27.3">
											<path className="st0" d="M52.4 0H2C.8 0-.1 1 0 2.2c1.1 14.1 12.9 25.1 27.2 25.1 14.3 0 26.1-11.1 27.2-25.1.1-1.2-.8-2.2-2-2.2z"/>
										</svg>
									</div>
								</div>
							</div>
						</div>

						{/* Shape 13 */}
						<div className="shape shape-3">
							<div className="shape-center">
								<svg id="shape-13" viewBox="0 0 23.1 23.1" width="23.1" height="23.1">
									<circle cx="11.6" cy="11.6" r="9.1" className="lined-pink"/>
								</svg>
							</div>
						</div>

						{/* Shape 15 */}
						<div className="shape shape-5">
							<div className="shape-center">
								<svg id="shape-15" viewBox="0 0 10.4 10.4" width="10.4" height="10.4">
									<circle className="st0" cx="5.2" cy="5.2" r="5.2"/>
								</svg>
							</div>
						</div>
		              <h2>Lets make something <span>great together —</span></h2>
		              <div className="cols">
		                <div className="left-col">
							{ this.state.sent ? (
								<div className="commentForm">
									{ this.state.sendError ? (
										<div className="message failure">
											Sorry, there was an error sending the message. Please find me on Twitter and message me there, to let me know my website sucks and can't sent messages 😊
										</div>
									) : (
										<div className="message success">
											Thanks for your message {this.state.contactname}, I will get back to you as quickly as I can 😊
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
		                      <button disabled={this.state.sending ? true : false} className={ this.state.sent ? 'success' : ( this.state.sending ? 'loading' : ( this.state.sentError ? 'error' : 'ready')) } type="submit">
														Send Enquiry
														<svg className="progress" viewBox="0 0 100 100">
														  <circle className="circle" cx="50" cy="50" r="30" fill="none" />
														</svg>
														<svg className="tick" width="70" height="70">
															<path d="m31.5,46.5l15.3,-23.2" />
															<path d="m31.5,46.5l-8.5,-7.1" />
														</svg>
														<svg className="cross" width="70" height="70">
															<path d="m35,35l-9.3,-9.3" />
															<path d="m35,35l9.3,9.3" />
															<path d="m35,35l-9.3,9.3" />
															<path d="m35,35l9.3,-9.3" />
														</svg>
													</button>
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
				</div>
            </ISeeYou>
          </section>
        );
    }
};
