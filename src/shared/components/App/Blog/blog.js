import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

export default class WritingsPage extends Component {
	constructor(props) {
        super(props);
    }

	componentDidMount() {

	}

	render() {
			console.log(this.props.params.id);
      return (
          <div>
						<p>Hi!</p>
          </div>
      );
    }
};
