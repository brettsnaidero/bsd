import React, { Component } from 'react';
import { Link } from 'react-router';

// Utils
import * as _ from 'lodash';

import Header from '../bits/header';

import showcaseItems from '../data/showcase-items.js';
import Shapes from '../bits/shapes';
import ISeeYou from '../bits/iseeyou';

export default class WorkPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: {},
			visibility: {
				bannertext: false,
				maintext: false
			}
		}
  }

	componentDidMount() {
		// Scroll to top on load
		window.scrollTo(0,0);
	}

	componentWillMount() {
		let page = _.find(showcaseItems, {'id': this.props.params.id});
		this.setState({
			page: page
		})
	}

	render() {
        return (
            <div>
				<Header nothome={true} theme="white" />
				{/* Banner */}
				<section
					className="work-banner"
					style={{
						backgroundImage: 'url(../' + this.state.page.image + ')'
					}}
				>
					<div className="row">
						<ISeeYou classesForChild="text">
							<div className="client">Client: {this.state.page.title}</div>
							<h1>{this.state.page.title}</h1>
							<Link className="back" to="/#work">
								<svg viewBox="0 0 125 125">
									<rect x="0" width="25" height="25"/>
									<rect x="50" width="25" height="25"/>
									<rect x="0" y="50" width="25" height="25"/>
									<rect x="50" y="50" width="25" height="25"/>
									<rect x="50" y="100" width="25" height="25"/>
									<rect x="0" y="100" width="25" height="25"/>
									<rect x="100" y="100" width="25" height="25"/>
									<rect x="100" y="50" width="25" height="25"/>
									<rect x="100" y="0" width="25" height="25"/>
								</svg>
								See other projects
							</Link>
						</ISeeYou>
					</div>
				</section>
				{/* Content */}
				<section className="work-content">
					<div className="row">
						<ISeeYou classesForChild="text">
							{this.state.page.description}
						</ISeeYou>
						<div className="side">
							<ISeeYou>
								<div className="bit">
									<div className="title">Client</div>
									<div>{this.state.page.client}</div>
								</div>
							</ISeeYou>
							<ISeeYou>
								<div className="bit">
									<div className="title">Expertise</div>
									<div>{this.state.page.expertise}</div>
								</div>
							</ISeeYou>
							{this.state.page.team && (
								<ISeeYou>
									<div className="bit">
										<div className="title">Team</div>
										<div>{this.state.page.team}</div>
									</div>
								</ISeeYou>
							)}
						</div>
					</div>
				</section>
				{/* Images */}
				<section className="work-images">
					<div className="row">
						{_.map(this.state.page.imageList, (each, key) => (
							<div key={key}>
							{ each.type == 'image' ? (
								<ISeeYou classesForChild="showcase-icu">
									<div className="image-bit">
										<img src={"../" + each.content} />
									</div>
								</ISeeYou>
							) : (
								<ISeeYou classesForChild="showcase-icu">
									<div className="text-bit">
										<p>{each.content}</p>
									</div>
								</ISeeYou>
							) }
							</div>
						))}
					</div>
				</section>

				<section className="work-footer">

					{/* Squiggle */}
					<div className="squiggle">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200" style={{
							enableBackground: 'new 0 0 200 200'
						}}>
							<path d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
							  c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
							  c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"/>
						</svg>
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

					{/* Circle */}
	                <div className="circle-holder">
	                    <div className="circle"/>
	                </div>

					<div className="row">
						<h2>That was a fun project :)</h2>
						<p>If you want to work with me on other fun projects, please get in touch.</p>
						<Link className="back" to="/#work">
							Back home
						</Link>
					</div>
				</section>
            </div>
        );
    }
};
