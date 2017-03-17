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
				<Header nothome={true} theme="light" />
				{/* Content */}
				<section className="work-content">
					<div className="row">
						<div className="client">
							<div className="title">{this.state.page.title}</div>
							{ this.state.page.link && (
								<a href={this.state.page.link} title={this.state.page.title}>
									<svg x="0px" y="0px" viewBox="0 0 80 80">
										<path d="M29.298,63.471l-4.048,4.02c-3.509,3.478-9.216,3.481-12.723,0
											c-1.686-1.673-2.612-3.895-2.612-6.257s0.927-4.585,2.611-6.258l14.9-14.783c3.088-3.062,8.897-7.571,13.131-3.372
											c1.943,1.93,5.081,1.917,7.01-0.025c1.93-1.942,1.918-5.081-0.025-7.009c-7.197-7.142-17.834-5.822-27.098,3.37L5.543,47.941
											C1.968,51.49,0,56.21,0,61.234s1.968,9.743,5.544,13.292C9.223,78.176,14.054,80,18.887,80c4.834,0,9.667-1.824,13.348-5.476
											l4.051-4.021c1.942-1.928,1.953-5.066,0.023-7.009C34.382,61.553,31.241,61.542,29.298,63.471z M74.454,6.044
											c-7.73-7.67-18.538-8.086-25.694-0.986l-5.046,5.009c-1.943,1.929-1.955,5.066-0.025,7.009s5.068,1.954,7.011,0.025l5.044-5.006
											c3.707-3.681,8.561-2.155,11.727,0.986c1.688,1.673,2.615,3.896,2.615,6.258c0,2.363-0.928,4.586-2.613,6.259l-15.897,15.77
											c-7.269,7.212-10.679,3.827-12.134,2.383c-1.943-1.929-5.08-1.917-7.01,0.025s-1.918,5.081,0.025,7.009
											c3.337,3.312,7.146,4.954,11.139,4.954c4.889,0,10.053-2.462,14.963-7.337l15.897-15.77C78.03,29.083,80,24.362,80,19.338
											C80,14.316,78.03,9.595,74.454,6.044z"/>
									</svg>
								</a>
							)}
						</div>
						<div className="side">
								{ _.map(this.state.page.expertise, (item, index) => <div key={index}>{item}</div> ) }
						</div>
						<ISeeYou classesForChild="text">
							{this.state.page.description}
						</ISeeYou>
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
            </div>
        );
    }
};
