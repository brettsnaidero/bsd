import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import HomeShapes from './home-shapes';
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

            {/* Designer */}
			<ISeeYou classesForChild="banner-text">
				<h1>
					<span className="line"><span className="top">Hello, I'm <span className="name">Brett Snaidero</span> —</span></span>
					<span className="line"><span className="bottom">a <span className="job">Digital Designer</span> from <span className="city">Sydney</span></span></span>
				</h1> {/*  <span className="hash">*</span> */}
			</ISeeYou>

			{/* Animation! */}
			<ISeeYou classesForChild="intro-anim">
				<HomeShapes />
			</ISeeYou>

            <Footer/>

          </section>
        );
    }
};
