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

            {/* Designer */}
						<ISeeYou classesForChild="banner-text">
							<div className="strokereveal">
								<svg x="0px" y="0px" viewBox="0 0 1088 500">
									<defs>
						        <filter id="glow">
						          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
						          <feMerge>
						            <feMergeNode in="coloredBlur"/>
						            <feMergeNode in="SourceGraphic"/>
						          </feMerge>
						        </filter>
						      </defs>
									<path className="lineme" d="M683.8,257.2l68.8-224.4l206-29.5l126.1,179.5l-69.6,178.5l-213.5,30L683.8,257.2z"/>
									<path className="lineme" d="M752.6,32.7l26.5,46l-95.3,178.4l128.8,53.1l-11,81"/>
									<path className="lineme" d="M958.6,3.2L779.1,78.7l33.5,231.5l202.5,51l-21-198.5L958.6,3.2z"/>
									<path className="lineme" d="M779.1,78.7l215,84l90.6,20 M812.6,310.2l181.5-147.5"/>
									<polygon className="lineme" points="3.3,342.5 63.6,496.8 212,441.1 156.2,285.7 	"/>
									<polyline className="lineme" points="3.3,342.5 66.5,391.5 212,441.1 	"/>
									<polyline className="lineme" points="156.2,285.7 66.5,391.5 63.6,496.8 	"/>
								</svg> 
							</div>
							<h1>
								<span className="line"><span className="top">Hello, I'm <span className="name">Brett Snaidero</span> —</span></span>
								<span className="line"><span className="bottom">a <span className="job">Digital Designer</span> from <span className="city">Sydney</span> <span className="hash">*</span></span></span>
							</h1>
						</ISeeYou>

						{/* Animation! */}
						<div className="intro-anim">
							{/* First Row */}
							{Array.apply(null, Array(9)).map(function(item, i){
                  return (
                    <div>
											<div className={"dot one row-" + (i + 1)}></div>
											<div className={"dot two row-" + (i + 1)}></div>
											<div className={"dot three row-" + (i + 1)}></div>
											<div className={"dot four row-" + (i + 1)}></div>
											<div className={"dot five row-" + (i + 1)}></div>
											<div className={"dot six row-" + (i + 1)}></div>
											<div className={"dot seven row-" + (i + 1)}></div>
											<div className={"dot eight row-" + (i + 1)}></div>
											<div className={"dot nine row-" + (i + 1)}></div>
                    </div>
                  );
              }, this)}
						</div>

            <Footer/>

          </section>
        );
    }
};
