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
            <div className="image" id="trigger" />
						{/* style={{backgroundImage: 'url(img/home.jpg)'}} */}

            {/* Designer */}
			<ISeeYou classesForChild="banner-text">
				<div className="strokereveal">
					<svg x="0px" y="0px" viewBox="0 0 692.5 472.7">
						<polyline className="st0" points="50.6,236.4 247.3,50 50,422.7 444.6,50 247.3,422.7 641.9,50 444.6,422.7 642.5,236.4 "/>
						<defs>
							<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(0)">
								<stop offset="0%" stopColor="#3a1fc3"/>
								<stop offset="100%" stopColor="#0c1b78"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<h1>
					<span className="line"><span className="top">Hello, I'm <span className="name">Brett Snaidero</span> —</span></span>
					<span className="line"><span className="bottom">a <span className="job">Digital Designer</span> from <span className="city">Sydney</span> <span className="hash">*</span></span></span>
				</h1>
			</ISeeYou>

						<Shapes />

            <Footer/>

          </section>
        );
    }
};
