import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import Shapes from './shapes';

// App
export default class Writings extends Component {
	constructor(props) {
        super(props);

        this.state = {

        }
    }

	componentDidMount() {

	}

	render() {
        return (
          <section className="home-writings" id="writings">
            {/* Shapes */}
						<Shapes />

          </section>

        );
    }
};
