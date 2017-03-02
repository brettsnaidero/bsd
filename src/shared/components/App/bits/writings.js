import React, { Component } from 'react';
import { Link } from 'react-router';

// Utils
import * as _ from 'lodash';

import Shapes from './shapes';
import blogItems from '../data/blog-items';

// App
export default class Writings extends Component {
	constructor(props) {
        super(props);

        this.state = {
					blogList: {},
					orderedList: {},
					selected: 0
        }
    }

	componentDidMount() {
			this.setState({
				blogList: blogItems
			})

			this.watchForNativeMouseLeave();
	}

	componentDidUpdate() {
			this.watchForNativeMouseLeave();
	}

	onMouseEnter(index) {
		this.setState({
			selected: index
		})
  }

	onMouseLeave(index) {
		this.setState({
			selected: 0
		})
	}

	watchForNativeMouseLeave() {
		// this.refs.hoverElement.addEventListener('mouseleave', () => {
		// 	if (this.props.disabled) {
		// 		this.handleMouseOut();
		// 	}
		// });
	}

	render() {
        return (
          <section className="home-writings" id="writings">
            {/* Shapes */}
						<Shapes />

						<div>
							<div className="row">
								<div className="flex">

									{/* Image */}
									<div className="image-holder">
										<div className="spacer">
											{ _.map(this.state.blogList, (item, index) => (
												<div key={index} className={"slide" + (index == this.state.selected ? " selected" : " notselected")} style={{ backgroundImage: 'url(' + item.img + ')' }}>
												</div>
											))}
										</div>
									</div>

									<ul className="writings-list">
										{/* Links */}
										{ _.map(this.state.blogList, (item, index) => (
											<li
												key={index}
												onMouseEnter={ () => this.onMouseEnter(index) }
	            					onMouseLeave={ () => this.onMouseLeave(index) }
												className={ index == this.state.selected ? " selected" : " notselected" }
											>
												<Link to="/writings/uxofasandwich">
													{ item.title }
													<sup>
														<time className="Date">AUG ‘16</time> {/* datetime="August 1, 2016" */}
													</sup>
													<span className="Slash"></span>
												</Link>
											</li>
										))}
									</ul>

								</div>

								{/* More */}
								<button className="more">More Articles</button>

							</div>
						</div>

          </section>

        );
    }
};
