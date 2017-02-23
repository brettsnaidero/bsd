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
				text: '',
				email: ''
      }
  }

	handleNameChange(e) {
    this.setState({
			contactname: e.target.value
		});
  }

  handleEmailChange(e) {
    this.setState({
			email: e.target.value
		});
  }

	validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

	handleTextChange(e) {
    this.setState({
			text: e.target.value
		});
  }

  handleSubmit(e) {
    e.preventDefault();
		// Validate email field
		if (this.validateEmail(e.target.value)) {

	  } else {

	  }
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
			name: '',
			text: '',
			email: ''
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
				 success: true
			 });
		 }.bind(this),
		 error: function(xhr, status, err) {
			 console.error(this.state.url, status, err.toString());
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
          <section className="home-contact" id="contact">
			{/* Shapes */}
			<Shapes/>

            {/* Text */}
			<ISeeYou classesForChild="banner-text">
				<div className="row">
	              <h2>Lets make something <span>great together —</span></h2>
	              <div className="cols">
	                <div className="left-col">
									{ this.state.success ? (
										<div className="success">
											Thanks for your message {this.state.contactname}, I will get back to you as quickly as I can :)
										</div>
									) : (
										<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
	                    <div className="field">
	                      <input
												type="text"
												placeholder="Name*"
												value={this.state.contactname}
												onChange={this.handleNameChange.bind(this)}
											/>
	                    </div>
	                    <div className="field">
	                      <input
												type="text"
												placeholder="Email*"
												value={this.state.email}
					          		onChange={this.handleEmailChange.bind(this)}
											/>
	                    </div>
	                    <div className="field">
	                      <textarea
													rows={5}
													placeholder="Message*"
													defaultValue={""}
													name="message"
													value={this.state.text}
						          		onChange={this.handleTextChange.bind(this)}
												/>
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
