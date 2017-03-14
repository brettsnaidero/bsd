import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import ISeeYou from './iseeyou';

// App
export default class Profile extends Component {
	constructor(props) {
        super(props);

        this.state = {

        }
    }

	componentDidMount() {
	}

	render() {
        return (
          <section className="profile">

            {/* Content */}
            <div className="row">
				<ISeeYou classesForChild="l-col">
                <p className="">Brett is a designer and probably a front-end developer, who sometimes likes to write about himself in the third person. He is driven by a desire to create meaningful and lasting connections with people through beautiful and intuitive digital experiences.</p>
				<p className="">I make good with the pixels, and then make those pixels move with classy, well composed development.</p>
              </ISeeYou>
              <div className="r-col">
					<ISeeYou>
                		<div className="image">
							<img src="img/profile.jpg" alt="Brett Snaidero - Diagonal line extraordinare" />
						</div>
					</ISeeYou>
					<ISeeYou>
						<div className="skills">
							<div className="title">Skills that pay the bills</div>
							<ul>
							  <li>UX Design</li>
							  <li>Interaction Design</li>
							  <li>HTML, CSS, JS</li>
							  <li>SASS</li>
							  <li>Grunt/Gulp/Webpack</li>
							  <li>Git</li>
							  <li>React</li>
							  <li>Proficient in Microsoft Word 😋</li>
							</ul>
						</div>
					</ISeeYou>
              </div>
            </div>
          </section>
        );
    }
};
