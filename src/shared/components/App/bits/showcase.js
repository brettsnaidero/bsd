import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import { Motion, spring } from 'react-motion';

import ShowcaseItem from './showcase-item';

import showcaseItems from '../data/showcase-items.js';

export default class Showcase extends Component {
	constructor(props) {
        super(props);

        this.state = {
			isModalActive: false,
			activeModal: 0,
			loadingModal: false,
			showcaseItems: showcaseItems,
			showExtra: false
        }
    }

	componentDidMount() {

	}

	showExtraToggle() {
		let newToggle = !this.state.showExtra;
		this.setState({
			showExtra: newToggle
		})
	}

	render() {
        return (
          <section className="work">
			{/* Modal */}
			<Motion style={{
				x: ( this.state.isModalActive ? spring(1) : spring(0) )
			}}>
				{ ({x}) =>
					<div
						className={"modal-wrap"}
						ref="modal"
						style={{
							opacity: `${x}`
						}}
					/>
				}
			</Motion>

			{/* BG */}
			<div className="bg-bits">
				<div className="contain">
					<h2>Work</h2>
				</div>
			</div>

            {/* Content */}
			<div className="work-listings clearfix">
              <ul>
				{ this.state.showcaseItems.map( (item, index) => (
					<ShowcaseItem
						id={item.id}
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						num={index}
						key={index}
						width={item.width}
						height={item.height}
						ref={index}

					/>
				))}
              </ul>

							{/* Shapes */}
							{/* Shape 31 */}
							<div className="shape shape-31">
								<div className="shape-center">
									<div className="shape-float">
										<svg id="shape-31" viewBox="0 0 68.6 21.3" width="68.6" height="21.3">
											<path className="line" d="M4.5 16.8C21 .4 47.6.4 64.1 16.8" />
											<ellipse className="circle" transform="rotate(-45.001 4.5 16.838)" cx="4.5" cy="16.8" rx="4.5" ry="4.5"/>
										</svg>
									</div>
								</div>
							</div>
							{/* Shape 39 */}
							<div className="shape shape-39">
								<div className="shape-center">
									<div className="shape-spin">
										<svg id="shape-39" viewBox="0 0 21.9 21.9" width="21.9" height="21.9">
											<path d="M2.5 16.4V5.5c0-1.7 1.3-3 3-3h10.9c1.7 0 3 1.3 3 3v10.9c0 1.7-1.3 3-3 3H5.5c-1.7 0-3-1.4-3-3z" className="lined-pink"/>
										</svg>
									</div>
								</div>
							</div>
							{/* Shape 35 */}
							<div className="shape shape-35">
								<div className="shape-center">
									<div className="shape-spin">
										<svg id="shape-35" viewBox="0 0 47.9 47.9" width="47.9" height="47.9">
											<path className="st0" d="M45.9 47.9H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h43.9c1.1 0 2 .9 2 2v43.9c0 1.1-.9 2-2 2z"/>
										</svg>
									</div>
								</div>
							</div>
							{/* Shape 17 */}
							<div className="shape shape-17">
								<div className="shape-center">
									<div className="shape-spin">
										<svg id="shape-17" viewBox="0 0 14.1 14.1" width="14.1" height="14.1">
											<path className="st0" d="M13.4 10l-1.3-1.3c-.9-.9-.9-2.4 0-3.3l1.3-1.3c.9-.9 1-2.4.2-3.3-.9-1-2.5-1-3.4-.1L8.7 2.1c-.9.9-2.4.9-3.3 0L4.1.8C3.2-.1 1.7-.2.8.6c-1 .9-1 2.5-.1 3.4l1.4 1.4c.9.9.9 2.4 0 3.3L.8 10c-.9.9-1 2.4-.2 3.3.9 1 2.5 1 3.4.1L5.4 12c.9-.9 2.4-.9 3.3 0l1.4 1.4c.9.9 2.5.9 3.4-.1.9-.9.8-2.4-.1-3.3z"/>
										</svg>
									</div>
								</div>
							</div>
							{/* Shape 16 */}
							<div className="shape shape-16">
								<div className="shape-center">
									<div className="shape-spin">
										<svg id="shape-16" viewBox="0 0 39.3 33" width="39.3" height="33">
											<path className="st0" d="M23.1.7L.5 27.9c-1.1 1.3-.2 3.2 1.4 3.3L37.2 33c1.5.1 2.5-1.4 1.9-2.8l-12.7-29c-.5-1.4-2.3-1.6-3.3-.5z"/>
										</svg>
									</div>
								</div>
							</div>
						</div>

						<div className="extras">
							<button className={"extras-show " + (this.state.showExtra ? "yes" : "no")} onClick={this.showExtraToggle.bind(this)}>
								<span className="left">{ this.state.showExtra ? `Less` : `More` }</span>
								<svg viewBox="0 0 10 10">
									<polyline style={{ fill: "none", stroke: "#FFF", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" }} points="2,3 5,7 8,3" />
								</svg>
								<span className="right">Work</span>
							</button>
							<div className={"show-me " + (this.state.showExtra ? "yes" : "no")}>
								<div className="item">
									<div className="name">KidzWish Foundation <span>Charity</span></div>
									<div className="link">
										<a href="http://www.kidzwishfoundation.org.au/" title="KidzWish Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Centaur Packaging <span>E-Commerce</span></div>
									<div className="link">
										<a href="https://www.centaurpackaging.com.au/" title="Centaur Packaging Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Mellross Homes <span>Building &amp; Design</span></div>
									<div className="link">
										<a href="http://www.mellrosshomes.com.au/" title="Mellross Homes Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Rel Auto Repairs <span>Mechanics</span></div>
									<div className="link">
										<a href="http://www.relautorepairs.com.au/" title="Rel Auto Repairs Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">University of Wollongong: Airport Pickup <span>University</span></div>
									<div className="link">
										<a href="http://uowairportpickup.com.au/" title="UOW Airport Pickup Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">University of Wollongong: Discovery Days <span>University</span></div>
									<div className="link">
										<a href="https://discoverydays.internetrix.net/" title="Discovery Days Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Department of Premier &amp; Cabinet <span>Government</span></div>
									<div className="link">
									</div>
								</div>
								<div className="item">
									<div className="name">Wesley Mission: Gift Shop <span>Charity / E-Commerce</span></div>
									<div className="link">
										<a href="https://www.wesleymission.org.au/home/get-involved/wesley-gift-shop/welcome-to-wesley-gift-shop/" title="Wesley Mission Gift Shop Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Central Sydney Osteopathy <span>Local Business</span></div>
									<div className="link">
										<a href="http://www.centralsydneyosteopathy.com.au/" title="CSO Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Family Advocacy <span>Charity</span></div>
									<div className="link">
										<a href="http://www.family-advocacy.com/" title="Family Advocacy Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Strathfield Council <span>Council</span></div>
									<div className="link">
										<a href="https://www.strathfield.nsw.gov.au/" title="Strathfield Council Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Greater Taree Council <span>Council</span></div>
									<div className="link">
									</div>
								</div>
								<div className="item">
									<div className="name">Centre for TPM <span>Training &amp; Process Improvement</span></div>
									<div className="link">
										<a href="http://www.ctpm.org.au/" title="CTPM Website" target="_blank">Visit Site</a>
									</div>
								</div>
								<div className="item">
									<div className="name">Red Car Driver Training <span>Driving Instruction</span></div>
									<div className="link">
										<a href="http://www.redcardrivertraining.com.au/" title="Red Car Driver Training Website" target="_blank">Visit Site</a>
									</div>
								</div>
							</div>
						</div>

          </section>
        );
    }
};
