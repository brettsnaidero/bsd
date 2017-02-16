import React, { Component } from 'react';

// App
export default class NotFound extends Component {
	constructor(props) {
      super(props);

      this.state = {

      }
  }

	render() {
        return (
					<div>
            <div className="notfound">
							<h1>Page not found!</h1>
							<p>Stay calm. Remember your training! And return <span>Home...</span></p>
            </div>
					</div>
        );
    }
};
