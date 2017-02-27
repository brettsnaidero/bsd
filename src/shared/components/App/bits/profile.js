import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import Shapes from './shapes';
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
          <section className="profile" id="profile">
            {/* Shapes */}
			<Shapes/>

            {/* Content */}
            <div className="row">
				<ISeeYou classesForChild="l-col">
                <p className="">Brett is a designer and front-end developer, who sometimes likes to write about himself in the third person. He is driven by a desire to create meaningful and lasting connections with brands and audiences through memorable creative which looks beautiful and works brilliantly.</p>
				<p className="">He is driven by a desire to create meaningful and lasting connections with brands and audiences through memorable creative which looks beautiful and works brilliantly.</p>
              </ISeeYou>
              <div className="r-col">
					<ISeeYou>
                		<div className="image">
							<img src="img/profile.jpg" alt="Brett Snaidero - Diagonal line extraordinare" />
						</div>
					</ISeeYou>
					<ISeeYou>
                	<div className="title">Skills that pay the bills</div>
					</ISeeYou>
					<ISeeYou>
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
								</ISeeYou>
              </div>
            </div>
          </section>
        );
    }
};
