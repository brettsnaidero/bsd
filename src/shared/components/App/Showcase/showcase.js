import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

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
						</div>
					</div>
				</section>
				{/* Images */}
				<section className="work-images">
					<div className="row">
						{_.map(this.state.page.imageList, (each, key) => (
							<div>
							{ each.type === 'image' ? (
								<ISeeYou>
									<img key={key} src={"../" + each.content} />
								</ISeeYou>
							) : (
								<ISeeYou>
									<p key={key}>{each.content}</p>
								</ISeeYou>
							) }
							</div>
						))}
					</div>
				</section>
				<section className="work-contact">
					{/* <Shapes /> */}
					<div className="row">
						<h2>That was a fun project :)</h2>
						<p>If you want to work with me on other fun projects, please get in touch.</p>
					</div>
				</section>
            </div>
        );
    }
};
