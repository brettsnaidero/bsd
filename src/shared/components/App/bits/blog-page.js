import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import Shapes from './shapes';

// App
export default class BlogPage extends Component {
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
            {/* Shapes */}
			<Shapes/>

            {/* Content */}
            <div className="row">
              <div className="l-col">
                <p className="iseeyou">Brett is a designer and front-end developer, who sometimes likes to write about himself in the third person.</p>
                <p className="iseeyou">He is driven by a desire to create meaningful and lasting connections with brands and audiences through memorable creative which looks beautiful and works brilliantly.</p>
				<p className="iseeyou">He is driven by a desire to create meaningful and lasting connections with brands and audiences through memorable creative which looks beautiful and works brilliantly.</p>
              </div>
              <div className="r-col">
                <div className="image iseeyou" style={{backgroundImage: 'url(img/home.jpg)'}} />
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
            </div>
          </section>
        );
    }
};
