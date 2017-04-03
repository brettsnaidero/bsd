import React, { Component } from 'react';
import { Link } from 'react-router';

// Utils
import * as _ from 'lodash';

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
          <section className="home-writings">

						{/* BG */}
						<div className="bg-bits">
							<div className="contain">
								<h2>Writings</h2>
							</div>
						</div>

						<div>
							<div className="row">
								<div className="flex">

									{/* Image */}
									<div className={"image-holder" + " selected-" + this.state.selected}>
										<div className="spacer">
											{ _.map(this.state.blogList, (item, index) => (
												<div key={index} className={ "slide num-" + index } style={{ backgroundImage: 'url(' + item.img + ')' }}>
												</div>
											))}
										</div>

										{/* Shapes */}
										{/* Shape 13 */}
										<div className="shape shape-13">
											<div className="shape-center">
												<div className="shape-float">
													<svg id="shape-13" viewBox="0 0 23.1 23.1" width="23.1" height="23.1">
														<circle cx="11.6" cy="11.6" r="9.1" className="lined-pink"/>
													</svg>
												</div>
											</div>
										</div>
										{/* Shape 19 */}
										<div className="shape shape-19">
											<div className="shape-center">
												<div className="shape-spin">
													<svg id="shape-19" viewBox="0 0 27.6 27.6" width="27.6" height="27.6">
														<path className="lined-nograd" d="M9.1 18.5L2 25.6M25.6 2l-7.1 7.1M2 2l7.1 7.1M18.5 18.5l7.1 7.1"/>
													</svg>
												</div>
											</div>
										</div>
										{/* Shape 20 */}
										<div className="shape shape-20">
											<div className="shape-center">
												<div className="shape-spin">
													<div className="shape-float">
														<svg id="shape-20" viewBox="0 0 9.7 9.7" width="9.7" height="9.7">
															<path className="st0" d="M8.4.1L2.6 2c-.3.1-.5.3-.6.6L.1 8.4c-.3.8.5 1.5 1.3 1.3l5.8-1.9c.3-.1.5-.3.6-.6l1.9-5.8C9.9.5 9.1-.2 8.4.1z"/>
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>

									<ul className="writings-list">
										{/* Links */}
										{ _.map(this.state.blogList, (item, index) => (
											<li
												key={index}
												onMouseEnter={ () => this.onMouseEnter(index) }
												className={ index == this.state.selected ? " selected" : " notselected" }
											>
												<Link to={"/writings/" + item.id}>
													<sup><time className="Date">{ item.date }</time></sup>
													{ item.title }
												</Link>
											</li>
										))}
									</ul>

								</div>

								{/* More
								<button className="more">More Articles</button> */}

							</div>
						</div>

          </section>

        );
    }
};
