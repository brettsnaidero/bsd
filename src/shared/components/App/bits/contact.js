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
				url: '/api/comments',
				author: '',
				text: ''
      }
  }

	handleAuthorChange(e) {
    this.setState({
			author: e.target.value
		});
  }

  handleTextChange(e) {
    this.setState({
			text: e.target.value
		});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.handleCommentSubmit({
			author: author,
			text: text
		});
    this.setState({
			author: '',
			text: ''
		});
  }

	handleCommentSubmit(comment) {
	 $.ajax({ 
		 url: this.state.url,
		 dataType: 'json',
		 type: 'POST',
		 data: comment,
		 success: function(data) {
			 console.log('Success!');
		 }.bind(this),
		 error: function(xhr, status, err) {
			 console.error(this.state.url, status, err.toString());
		 }.bind(this)
	 });
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
	                  <form className="commentForm" onSubmit={this.handleSubmit}>
	                    <div className="field">
	                      <input
													type="text"
													placeholder="Name*"
													value={this.state.author}
          								onChange={this.handleAuthorChange}
												/>
	                    </div>
	                    <div className="field">
	                      <input
													type="text"
													placeholder="Company"
													value={this.state.text}
          								onChange={this.handleTextChange}
												/>
	                    </div>
	                    {/*
	                    <div className="field">
	                      <textarea
													rows={5}
													placeholder="Message*"
													defaultValue={""}
													name="message"
												/>
	                    </div>
											*/}
	                    <div className="field">
	                      <input type="submit" value="Send Enquiry" />
	                    </div>
	                  </form>
	                </div>
	                <div className="right-col">
	                  <h5>Email</h5>
	                  <p>info@brettsnaidero.com</p>
	                </div>
	              </div>
							</div>
            </ISeeYou>
          </section>
        );
    }
};
