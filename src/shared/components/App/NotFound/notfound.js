import React, { Component } from 'react';

import Header from '../bits/header';

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
			<Header nothome={true} />
			<div className="notfound">
				<h1>Page not found!</h1>
				<p>Stay calm. Remember your training! And return <span>Home...</span></p>
			</div>
		</div>
        );
    }
};
