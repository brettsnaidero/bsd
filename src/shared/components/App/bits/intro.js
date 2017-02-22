import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import Shapes from './shapes';
import Footer from './footer';
import ISeeYou from './iseeyou';

// App
export default class Intro extends Component {
	constructor(props) {
        super(props);

        this.state = {

        }
    }

	componentDidMount() {
	}

	render() {
        return (
          <section className="home" id="parallaxText">

            {/* Image */}
            <div className="image" id="trigger" style={{backgroundImage: 'url(img/home.jpg)'}} />

            {/* Designer */}
						<ISeeYou classesForChild="banner-text">
              <h1>Hello, I'm <span className="name">Brett Snaidero</span> —
                <span className="line">a <span className="job">Digital Designer</span> from <span className="city">Sydney</span> <span className="hash">*</span></span></h1>
            </ISeeYou>

						<Shapes />

            <Footer/>

          </section>
        );
    }
};
