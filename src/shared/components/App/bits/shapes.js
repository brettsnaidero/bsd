import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

// App
export default class Shapes extends Component {
	constructor(props) {
        super(props);

        this.state = {

        }
    }

	componentDidMount() {
	}

	render() {
        return (
          <div>
              {/* Squiggle */}
              <div className="squiggle layer1">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200" style={{
                      enableBackground: 'new 0 0 200 200'
                  }}>
                      <path d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
                        c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
                        c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"/>
                  </svg>
              </div>
              {/* Squiggle */}
              <div className="squiggle second layer2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200" style={{
                      enableBackground: 'new 0 0 200 200'
                  }}>
                      <path d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
                        c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
                        c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"/>
                  </svg>
              </div>
              {/* Cross */}
              <div className="cross-holder layer3">
                  <div className="cross"/>
              </div>
              {/* Triangle */}
              <div className="triangle layer4">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="75.8 -672.6 110 60" style={{
                      enableBackground: 'new 75.8 -672.6 110 60'
                  }}>
                      <path className="st0" d="M84.2-621l45.2-45.2c0.8-0.8,2-0.8,2.8,0l45.2,45.2c1.3,1.3,0.4,3.4-1.4,3.4H85.6
                    C83.8-617.6,82.9-619.8,84.2-621z"/>
                  </svg>
              </div>
              {/* Semicircle */}
              <div className="semicircle layer5">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 110 110" style={{
                      enableBackground: 'new 0 0 110 110'
                  }}>
                      <path className="st1" d="M89.9,19.1c19.5,19.5,19.5,51.2,0,70.7s-51.2,19.5-70.7,0"/>
                  </svg>
              </div>
              {/* Circle */}
              <div className="circle-holder layer6">
                  <div className="circle"/>
              </div>
          </div>
        );
    }
};
