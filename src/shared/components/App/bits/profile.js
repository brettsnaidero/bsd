import React, {Component} from 'react';

// Utils
import * as _ from "lodash";

import ISeeYou from './iseeyou';

// App
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <section className="profile">

        {/* Content */}
        <div className="row">
          <ISeeYou classesForChild="l-col">
            <p className="">Brett is a designer and probably a front-end developer, who sometimes likes to write about himself in the third person. He is driven by a desire to create meaningful and lasting connections with people through beautiful and intuitive digital experiences.</p>
            <p className="">I *ahem* I mean <em>he</em> is a total nerd, who is passionate about design and code, and loves building cool things on the web.</p>
          </ISeeYou>
          <div className="r-col">
            <ISeeYou>
              <div className="image">
                <img src="img/profile.jpg" alt="Brett Snaidero - Diagonal line extraordinare"/>
                <div className="shape-1">
                  <div className="shape-center">
                    <div className="shape-spin">
                      <svg id="shape-22" viewBox="0 0 24.6 24.6" width="24.6" height="24.6">
                        <path d="M7.8 3.9L2.6 19.5c-.5 1.6 1 3.1 2.5 2.5l15.6-5.2c1.4-.5 1.8-2.3.8-3.3L11.1 3.1c-1-1.1-2.8-.6-3.3.8z" className="lined-pink"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="shape-2">
                  <div className="shape-center">
                    <div className="shape-spin">
                      <svg id="shape-14" viewBox="0 0 22.9 22.9" width="22.9" height="22.9">
                        <path className="lined-nograd" d="M20.9 2L2 20.9M2 2l18.9 18.9"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="shape-3">
                  <div className="shape-center">
                    <div className="shape-float">
                      <svg id="shape-13" viewBox="0 0 23.1 23.1" width="23.1" height="23.1">
                        <circle cx="11.6" cy="11.6" r="9.1" className="lined-pink"/>
                      </svg>
                    </div>
                  </div>
                </div>
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
