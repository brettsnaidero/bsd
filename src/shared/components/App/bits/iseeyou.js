import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import VisibilitySensor from 'react-visibility-sensor';

// App
export default class ISeeYou extends Component {
	constructor(props) {
      super(props);

      this.state = {
		visisble: false
      }
  }

	handleInview(isVisible) {
		if (isVisible == true) {
			this.setState({
				visible: true
			});
		}
	}

	render() {
      return (
		<VisibilitySensor scrollCheck scrollDelay={50} onChange={this.handleInview.bind(this)} partialVisibility={true}>
			<div className={ "iseeyou " + ( this.props.classesForChild ? this.props.classesForChild : "" ) + " " + (this.state.visible ? "active" : "inactive")}>
				{this.props.children}
			</div>
		</VisibilitySensor>
      );
  }
};
