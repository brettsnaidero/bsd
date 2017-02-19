import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import showcaseItems from '../data/showcase-items.js';
import Shapes from '../bits/shapes';

export default class WorkPage extends Component {
	constructor(props) {
        super(props);

		this.state = {
			page: {}
		}
    }

	componentDidMount() {
		let page = _.find(showcaseItems, {'id': this.props.params.id});
		this.setState({
			page: page
		})
	}

	render() {
        return (
            <div>
				{/* Banner */}
				<section
				className="work-banner"
				style={{
					backgroundImage: 'url(../' + this.state.page.image + ')'
				}}>
					<div className="row">
						<div className="text iseeyou">
							<div className="client">Client: {this.state.page.title}</div>
							<h1>{this.state.page.title}</h1>
						</div>
					</div>
				</section>
				{/* Content */}
				<section className="work-content">
					<div className="row">
						<div className="text iseeyou">
							<p>The <strong>British Airways</strong> lounges at Heathrow Airport have a combined footfall of over 155,000 every month. That’s almost two million people that pass through these areas every year. BA approached us requiring a way of advertising to their passengers using digital signage.</p>
						</div>
						<div className="side">
							<div className="bit iseeyou">
								<div className="title">Client</div>
								<div>British Airways</div>
							</div>
							<div className="bit iseeyou">
								<div className="title">Expertise</div>
								<div>Apps, Strategy, Security</div>
							</div>
						</div>
					</div>
				</section>
				{/* Images */}
				<section className="work-images">
					<div className="row">
						<img className="iseeyou" src={"../" + this.state.page.image} />
					</div>
				</section>
				<section className="work-contact">
					<Shapes />
					<div className="row">
						<h2>That was a fun project :)</h2>
						<p>If you want to work with me on other fun projects, please get in touch.</p>
					</div>
				</section>
            </div>
        );
    }
};
