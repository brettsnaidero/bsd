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
							{/* Square */}
							<div className="square-holder">
								<div className="square"></div>
							</div>
							{/* Square */}
							<div className="square-holder two">
								<div className="square"></div>
							</div>
							{/* Semi */}
							<div className="semi-holder">
								<div className="semicircle"></div>
							</div>
							{/* Semi */}
							<div className="semi-holder two">
								<div className="semicircle"></div>
							</div>
              {/* Cross */}
              <div className="cross-holder layer3">
                  <div className="cross"/>
              </div>
              {/* Triangle */}
              <div className="triangle">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="75.8 -672.6 110 60" style={{
                      enableBackground: 'new 75.8 -672.6 110 60'
                  }}>
                      <path className="st0" d="M84.2-621l45.2-45.2c0.8-0.8,2-0.8,2.8,0l45.2,45.2c1.3,1.3,0.4,3.4-1.4,3.4H85.6
                    C83.8-617.6,82.9-619.8,84.2-621z"/>
                  </svg>
              </div>
							{/* Triangle 2 */}
              <div className="triangle two">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="75.8 -672.6 110 60" style={{
                      enableBackground: 'new 75.8 -672.6 110 60'
                  }}>
                      <path className="st0" d="M84.2-621l45.2-45.2c0.8-0.8,2-0.8,2.8,0l45.2,45.2c1.3,1.3,0.4,3.4-1.4,3.4H85.6
                    C83.8-617.6,82.9-619.8,84.2-621z"/>
                  </svg>
              </div>
							{/* Triangle BG */}
              <div className="triangle-bg layer4">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="75.8 -672.6 110 60" style={{
                      enableBackground: 'new 75.8 -672.6 110 60'
                  }}>
                      <path className="st0" d="M84.2-621l45.2-45.2c0.8-0.8,2-0.8,2.8,0l45.2,45.2c1.3,1.3,0.4,3.4-1.4,3.4H85.6
                    C83.8-617.6,82.9-619.8,84.2-621z"/>
                  </svg>
              </div>
							{/* BG Circle */}
              <div className="bgcircle-holder layer6">
                  <div className="circle"/>
              </div>
              {/* Circle */}
              <div className="circle-holder layer6">
                  <div className="circle"/>
              </div>
							{/* Cross */}
							<div className="cross-holder two">
								<div className="cross"></div>
							</div>
          </div>
        );
    }
};
