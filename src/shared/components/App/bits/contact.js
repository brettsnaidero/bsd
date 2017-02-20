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
				name: '',
				company: '',
				email: '',
				message: ''
      }
  }

  handleTextChange(e) {
		let newState = {};
		newState[e.target.name] = e.target.value;

    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

	handleCommentSubmit(comment) {
  }

	componentDidMount() {
	}

	render() {
        return (
          <section className="home-contact" id="contact">
						{/* Shapes */}
						<Shapes/>

            {/* Text */}
						<ISeeYou classesForChild="banner-text">
              <h2>Lets make something <span>great together —</span></h2>
              <div className="cols">
                <div className="left-col">
                  <form>
                    <div className="field">
                      <input
												type="text"
												placeholder="Name*"
												value={this.state.name}
												name="name"
					          		onChange={this.handleTextChange}
											/>
                    </div>
                    <div className="field">
                      <input
												type="text"
												placeholder="Company"
												value={this.state.company}
												name="company"
												onChange={this.handleTextChange}
											/>
                    </div>
                    <div className="field">
                      <input
												type="email"
												placeholder="Email*"
												value={this.state.email}
												name="email"
												onChange={this.handleTextChange}
											/>
                    </div>
                    <div className="field">
                      <textarea
												rows={5}
												placeholder="Message*"
												defaultValue={""}
												value={this.state.message}
												name="message"
												onChange={this.handleTextChange}
											/>
                    </div>
                    <div className="field">
                      <input type="submit" defaultValue="Send Enquiry" />
                    </div>
                  </form>
                </div>
                <div className="right-col">
                  <h5>Email</h5>
                  <p>info@brettsnaidero.com</p>
                </div>
              </div>
            </ISeeYou>
          </section>
        );
    }
};
